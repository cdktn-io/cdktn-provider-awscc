# `mediapackagePackagingGroup` Submodule <a name="`mediapackagePackagingGroup` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingGroup <a name="MediapackagePackagingGroup" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group awscc_mediapackage_packaging_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

new mediapackagePackagingGroup.MediapackagePackagingGroup(scope: Construct, id: string, config: MediapackagePackagingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig">MediapackagePackagingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs">putEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs">resetEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization"></a>

```typescript
public putAuthorization(value: MediapackagePackagingGroupAuthorization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `putEgressAccessLogs` <a name="putEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs"></a>

```typescript
public putEgressAccessLogs(value: MediapackagePackagingGroupEgressAccessLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putEgressAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | MediapackagePackagingGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetAuthorization"></a>

```typescript
public resetAuthorization(): void
```

##### `resetEgressAccessLogs` <a name="resetEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetEgressAccessLogs"></a>

```typescript
public resetEgressAccessLogs(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediapackagePackagingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediapackagePackagingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediapackagePackagingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs">egressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput">authorizationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput">egressAccessLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput">packagingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId">packagingGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorization"></a>

```typescript
public readonly authorization: MediapackagePackagingGroupAuthorizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference">MediapackagePackagingGroupAuthorizationOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `egressAccessLogs`<sup>Required</sup> <a name="egressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogs"></a>

```typescript
public readonly egressAccessLogs: MediapackagePackagingGroupEgressAccessLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference">MediapackagePackagingGroupEgressAccessLogsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tags"></a>

```typescript
public readonly tags: MediapackagePackagingGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList">MediapackagePackagingGroupTagsList</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.authorizationInput"></a>

```typescript
public readonly authorizationInput: IResolvable | MediapackagePackagingGroupAuthorization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---

##### `egressAccessLogsInput`<sup>Optional</sup> <a name="egressAccessLogsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.egressAccessLogsInput"></a>

```typescript
public readonly egressAccessLogsInput: IResolvable | MediapackagePackagingGroupEgressAccessLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---

##### `packagingGroupIdInput`<sup>Optional</sup> <a name="packagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupIdInput"></a>

```typescript
public readonly packagingGroupIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediapackagePackagingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.packagingGroupId"></a>

```typescript
public readonly packagingGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingGroupAuthorization <a name="MediapackagePackagingGroupAuthorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

const mediapackagePackagingGroupAuthorization: mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret">cdnIdentifierSecret</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn">secretsRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager. |

---

##### `cdnIdentifierSecret`<sup>Optional</sup> <a name="cdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.cdnIdentifierSecret"></a>

```typescript
public readonly cdnIdentifierSecret: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#cdn_identifier_secret MediapackagePackagingGroup#cdn_identifier_secret}

---

##### `secretsRoleArn`<sup>Optional</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization.property.secretsRoleArn"></a>

```typescript
public readonly secretsRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#secrets_role_arn MediapackagePackagingGroup#secrets_role_arn}

---

### MediapackagePackagingGroupConfig <a name="MediapackagePackagingGroupConfig" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

const mediapackagePackagingGroupConfig: mediapackagePackagingGroup.MediapackagePackagingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId">packagingGroupId</a></code> | <code>string</code> | The ID of the PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | CDN Authorization. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs">egressAccessLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | The configuration parameters for egress access logging. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `packagingGroupId`<sup>Required</sup> <a name="packagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.packagingGroupId"></a>

```typescript
public readonly packagingGroupId: string;
```

- *Type:* string

The ID of the PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#packaging_group_id MediapackagePackagingGroup#packaging_group_id}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.authorization"></a>

```typescript
public readonly authorization: MediapackagePackagingGroupAuthorization;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

CDN Authorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#authorization MediapackagePackagingGroup#authorization}

---

##### `egressAccessLogs`<sup>Optional</sup> <a name="egressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.egressAccessLogs"></a>

```typescript
public readonly egressAccessLogs: MediapackagePackagingGroupEgressAccessLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

The configuration parameters for egress access logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#egress_access_logs MediapackagePackagingGroup#egress_access_logs}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediapackagePackagingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#tags MediapackagePackagingGroup#tags}

---

### MediapackagePackagingGroupEgressAccessLogs <a name="MediapackagePackagingGroupEgressAccessLogs" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

const mediapackagePackagingGroupEgressAccessLogs: mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName">logGroupName</a></code> | <code>string</code> | Sets a custom AWS CloudWatch log group name for egress logs. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Sets a custom AWS CloudWatch log group name for egress logs.

If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#log_group_name MediapackagePackagingGroup#log_group_name}

---

### MediapackagePackagingGroupTags <a name="MediapackagePackagingGroupTags" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

const mediapackagePackagingGroupTags: mediapackagePackagingGroup.MediapackagePackagingGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#key MediapackagePackagingGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackage_packaging_group#value MediapackagePackagingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingGroupAuthorizationOutputReference <a name="MediapackagePackagingGroupAuthorizationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

new mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret">resetCdnIdentifierSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn">resetSecretsRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCdnIdentifierSecret` <a name="resetCdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetCdnIdentifierSecret"></a>

```typescript
public resetCdnIdentifierSecret(): void
```

##### `resetSecretsRoleArn` <a name="resetSecretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.resetSecretsRoleArn"></a>

```typescript
public resetSecretsRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput">cdnIdentifierSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput">secretsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret">cdnIdentifierSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn">secretsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cdnIdentifierSecretInput`<sup>Optional</sup> <a name="cdnIdentifierSecretInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecretInput"></a>

```typescript
public readonly cdnIdentifierSecretInput: string;
```

- *Type:* string

---

##### `secretsRoleArnInput`<sup>Optional</sup> <a name="secretsRoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArnInput"></a>

```typescript
public readonly secretsRoleArnInput: string;
```

- *Type:* string

---

##### `cdnIdentifierSecret`<sup>Required</sup> <a name="cdnIdentifierSecret" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.cdnIdentifierSecret"></a>

```typescript
public readonly cdnIdentifierSecret: string;
```

- *Type:* string

---

##### `secretsRoleArn`<sup>Required</sup> <a name="secretsRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.secretsRoleArn"></a>

```typescript
public readonly secretsRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediapackagePackagingGroupAuthorization;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupAuthorization">MediapackagePackagingGroupAuthorization</a>

---


### MediapackagePackagingGroupEgressAccessLogsOutputReference <a name="MediapackagePackagingGroupEgressAccessLogsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

new mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediapackagePackagingGroupEgressAccessLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupEgressAccessLogs">MediapackagePackagingGroupEgressAccessLogs</a>

---


### MediapackagePackagingGroupTagsList <a name="MediapackagePackagingGroupTagsList" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

new mediapackagePackagingGroup.MediapackagePackagingGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get"></a>

```typescript
public get(index: number): MediapackagePackagingGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediapackagePackagingGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>[]

---


### MediapackagePackagingGroupTagsOutputReference <a name="MediapackagePackagingGroupTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer"></a>

```typescript
import { mediapackagePackagingGroup } from '@cdktn/provider-awscc'

new mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediapackagePackagingGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagePackagingGroup.MediapackagePackagingGroupTags">MediapackagePackagingGroupTags</a>

---



