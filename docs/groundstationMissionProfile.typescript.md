# `groundstationMissionProfile` Submodule <a name="`groundstationMissionProfile` Submodule" id="@cdktn/provider-awscc.groundstationMissionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationMissionProfile <a name="GroundstationMissionProfile" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile awscc_groundstation_mission_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfile(scope: Construct, id: string, config: GroundstationMissionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig">GroundstationMissionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges">putDataflowEdges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey">putStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds">resetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds">resetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey">resetStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole">resetStreamsKmsRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn">resetTelemetrySinkConfigArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataflowEdges` <a name="putDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges"></a>

```typescript
public putDataflowEdges(value: IResolvable | GroundstationMissionProfileDataflowEdges[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putDataflowEdges.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---

##### `putStreamsKmsKey` <a name="putStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey"></a>

```typescript
public putStreamsKmsKey(value: GroundstationMissionProfileStreamsKmsKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putStreamsKmsKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | GroundstationMissionProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---

##### `resetContactPostPassDurationSeconds` <a name="resetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPostPassDurationSeconds"></a>

```typescript
public resetContactPostPassDurationSeconds(): void
```

##### `resetContactPrePassDurationSeconds` <a name="resetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetContactPrePassDurationSeconds"></a>

```typescript
public resetContactPrePassDurationSeconds(): void
```

##### `resetStreamsKmsKey` <a name="resetStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsKey"></a>

```typescript
public resetStreamsKmsKey(): void
```

##### `resetStreamsKmsRole` <a name="resetStreamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetStreamsKmsRole"></a>

```typescript
public resetStreamsKmsRole(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTelemetrySinkConfigArn` <a name="resetTelemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.resetTelemetrySinkConfigArn"></a>

```typescript
public resetTelemetrySinkConfigArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

groundstationMissionProfile.GroundstationMissionProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GroundstationMissionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationMissionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationMissionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationMissionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges">dataflowEdges</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId">missionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey">streamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput">contactPostPassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput">contactPrePassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput">dataflowEdgesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput">minimumViableContactDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput">streamsKmsKeyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput">streamsKmsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput">telemetrySinkConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput">trackingConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds">minimumViableContactDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole">streamsKmsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn">telemetrySinkConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn">trackingConfigArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataflowEdges`<sup>Required</sup> <a name="dataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdges"></a>

```typescript
public readonly dataflowEdges: GroundstationMissionProfileDataflowEdgesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList">GroundstationMissionProfileDataflowEdgesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `missionProfileId`<sup>Required</sup> <a name="missionProfileId" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.missionProfileId"></a>

```typescript
public readonly missionProfileId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `streamsKmsKey`<sup>Required</sup> <a name="streamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKey"></a>

```typescript
public readonly streamsKmsKey: GroundstationMissionProfileStreamsKmsKeyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference">GroundstationMissionProfileStreamsKmsKeyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tags"></a>

```typescript
public readonly tags: GroundstationMissionProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList">GroundstationMissionProfileTagsList</a>

---

##### `contactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="contactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSecondsInput"></a>

```typescript
public readonly contactPostPassDurationSecondsInput: number;
```

- *Type:* number

---

##### `contactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="contactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSecondsInput"></a>

```typescript
public readonly contactPrePassDurationSecondsInput: number;
```

- *Type:* number

---

##### `dataflowEdgesInput`<sup>Optional</sup> <a name="dataflowEdgesInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.dataflowEdgesInput"></a>

```typescript
public readonly dataflowEdgesInput: IResolvable | GroundstationMissionProfileDataflowEdges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---

##### `minimumViableContactDurationSecondsInput`<sup>Optional</sup> <a name="minimumViableContactDurationSecondsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSecondsInput"></a>

```typescript
public readonly minimumViableContactDurationSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsKmsKeyInput`<sup>Optional</sup> <a name="streamsKmsKeyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsKeyInput"></a>

```typescript
public readonly streamsKmsKeyInput: IResolvable | GroundstationMissionProfileStreamsKmsKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---

##### `streamsKmsRoleInput`<sup>Optional</sup> <a name="streamsKmsRoleInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRoleInput"></a>

```typescript
public readonly streamsKmsRoleInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GroundstationMissionProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---

##### `telemetrySinkConfigArnInput`<sup>Optional</sup> <a name="telemetrySinkConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArnInput"></a>

```typescript
public readonly telemetrySinkConfigArnInput: string;
```

- *Type:* string

---

##### `trackingConfigArnInput`<sup>Optional</sup> <a name="trackingConfigArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArnInput"></a>

```typescript
public readonly trackingConfigArnInput: string;
```

- *Type:* string

---

##### `contactPostPassDurationSeconds`<sup>Required</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

---

##### `contactPrePassDurationSeconds`<sup>Required</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="minimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.minimumViableContactDurationSeconds"></a>

```typescript
public readonly minimumViableContactDurationSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streamsKmsRole`<sup>Required</sup> <a name="streamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.streamsKmsRole"></a>

```typescript
public readonly streamsKmsRole: string;
```

- *Type:* string

---

##### `telemetrySinkConfigArn`<sup>Required</sup> <a name="telemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.telemetrySinkConfigArn"></a>

```typescript
public readonly telemetrySinkConfigArn: string;
```

- *Type:* string

---

##### `trackingConfigArn`<sup>Required</sup> <a name="trackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.trackingConfigArn"></a>

```typescript
public readonly trackingConfigArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationMissionProfileConfig <a name="GroundstationMissionProfileConfig" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

const groundstationMissionProfileConfig: groundstationMissionProfile.GroundstationMissionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges">dataflowEdges</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds">minimumViableContactDurationSeconds</a></code> | <code>number</code> | Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name">name</a></code> | <code>string</code> | A name used to identify a mission profile. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn">trackingConfigArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | Post-pass time needed after the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | Pre-pass time needed before the contact. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey">streamsKmsKey</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole">streamsKmsRole</a></code> | <code>string</code> | The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn">telemetrySinkConfigArn</a></code> | <code>string</code> | ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataflowEdges`<sup>Required</sup> <a name="dataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.dataflowEdges"></a>

```typescript
public readonly dataflowEdges: IResolvable | GroundstationMissionProfileDataflowEdges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#dataflow_edges GroundstationMissionProfile#dataflow_edges}.

---

##### `minimumViableContactDurationSeconds`<sup>Required</sup> <a name="minimumViableContactDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.minimumViableContactDurationSeconds"></a>

```typescript
public readonly minimumViableContactDurationSeconds: number;
```

- *Type:* number

Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#minimum_viable_contact_duration_seconds GroundstationMissionProfile#minimum_viable_contact_duration_seconds}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name used to identify a mission profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#name GroundstationMissionProfile#name}

---

##### `trackingConfigArn`<sup>Required</sup> <a name="trackingConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.trackingConfigArn"></a>

```typescript
public readonly trackingConfigArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tracking_config_arn GroundstationMissionProfile#tracking_config_arn}.

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

Post-pass time needed after the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_post_pass_duration_seconds GroundstationMissionProfile#contact_post_pass_duration_seconds}

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

Pre-pass time needed before the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#contact_pre_pass_duration_seconds GroundstationMissionProfile#contact_pre_pass_duration_seconds}

---

##### `streamsKmsKey`<sup>Optional</sup> <a name="streamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsKey"></a>

```typescript
public readonly streamsKmsKey: GroundstationMissionProfileStreamsKmsKey;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_key GroundstationMissionProfile#streams_kms_key}

---

##### `streamsKmsRole`<sup>Optional</sup> <a name="streamsKmsRole" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.streamsKmsRole"></a>

```typescript
public readonly streamsKmsRole: string;
```

- *Type:* string

The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#streams_kms_role GroundstationMissionProfile#streams_kms_role}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GroundstationMissionProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#tags GroundstationMissionProfile#tags}.

---

##### `telemetrySinkConfigArn`<sup>Optional</sup> <a name="telemetrySinkConfigArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileConfig.property.telemetrySinkConfigArn"></a>

```typescript
public readonly telemetrySinkConfigArn: string;
```

- *Type:* string

ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#telemetry_sink_config_arn GroundstationMissionProfile#telemetry_sink_config_arn}

---

### GroundstationMissionProfileDataflowEdges <a name="GroundstationMissionProfileDataflowEdges" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

const groundstationMissionProfileDataflowEdges: groundstationMissionProfile.GroundstationMissionProfileDataflowEdges = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#destination GroundstationMissionProfile#destination}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#source GroundstationMissionProfile#source}.

---

### GroundstationMissionProfileStreamsKmsKey <a name="GroundstationMissionProfileStreamsKmsKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

const groundstationMissionProfileStreamsKmsKey: groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn">kmsAliasArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName">kmsAliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}. |

---

##### `kmsAliasArn`<sup>Optional</sup> <a name="kmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasArn"></a>

```typescript
public readonly kmsAliasArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_arn GroundstationMissionProfile#kms_alias_arn}.

---

##### `kmsAliasName`<sup>Optional</sup> <a name="kmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsAliasName"></a>

```typescript
public readonly kmsAliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_alias_name GroundstationMissionProfile#kms_alias_name}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#kms_key_arn GroundstationMissionProfile#kms_key_arn}.

---

### GroundstationMissionProfileTags <a name="GroundstationMissionProfileTags" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

const groundstationMissionProfileTags: groundstationMissionProfile.GroundstationMissionProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#key GroundstationMissionProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/groundstation_mission_profile#value GroundstationMissionProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationMissionProfileDataflowEdgesList <a name="GroundstationMissionProfileDataflowEdgesList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get"></a>

```typescript
public get(index: number): GroundstationMissionProfileDataflowEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationMissionProfileDataflowEdges[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>[]

---


### GroundstationMissionProfileDataflowEdgesOutputReference <a name="GroundstationMissionProfileDataflowEdgesOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdgesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationMissionProfileDataflowEdges;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileDataflowEdges">GroundstationMissionProfileDataflowEdges</a>

---


### GroundstationMissionProfileStreamsKmsKeyOutputReference <a name="GroundstationMissionProfileStreamsKmsKeyOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn">resetKmsAliasArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName">resetKmsAliasName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsAliasArn` <a name="resetKmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasArn"></a>

```typescript
public resetKmsAliasArn(): void
```

##### `resetKmsAliasName` <a name="resetKmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsAliasName"></a>

```typescript
public resetKmsAliasName(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput">kmsAliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput">kmsAliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn">kmsAliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName">kmsAliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsAliasArnInput`<sup>Optional</sup> <a name="kmsAliasArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArnInput"></a>

```typescript
public readonly kmsAliasArnInput: string;
```

- *Type:* string

---

##### `kmsAliasNameInput`<sup>Optional</sup> <a name="kmsAliasNameInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasNameInput"></a>

```typescript
public readonly kmsAliasNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `kmsAliasArn`<sup>Required</sup> <a name="kmsAliasArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasArn"></a>

```typescript
public readonly kmsAliasArn: string;
```

- *Type:* string

---

##### `kmsAliasName`<sup>Required</sup> <a name="kmsAliasName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsAliasName"></a>

```typescript
public readonly kmsAliasName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationMissionProfileStreamsKmsKey;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileStreamsKmsKey">GroundstationMissionProfileStreamsKmsKey</a>

---


### GroundstationMissionProfileTagsList <a name="GroundstationMissionProfileTagsList" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get"></a>

```typescript
public get(index: number): GroundstationMissionProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationMissionProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>[]

---


### GroundstationMissionProfileTagsOutputReference <a name="GroundstationMissionProfileTagsOutputReference" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer"></a>

```typescript
import { groundstationMissionProfile } from '@cdktn/provider-awscc'

new groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationMissionProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationMissionProfile.GroundstationMissionProfileTags">GroundstationMissionProfileTags</a>

---



