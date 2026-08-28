# `shieldProactiveEngagement` Submodule <a name="`shieldProactiveEngagement` Submodule" id="@cdktn/provider-awscc.shieldProactiveEngagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldProactiveEngagement <a name="ShieldProactiveEngagement" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement awscc_shield_proactive_engagement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

new shieldProactiveEngagement.ShieldProactiveEngagement(scope: Construct, id: string, config: ShieldProactiveEngagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig">ShieldProactiveEngagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList">putEmergencyContactList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmergencyContactList` <a name="putEmergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList"></a>

```typescript
public putEmergencyContactList(value: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.putEmergencyContactList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ShieldProactiveEngagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ShieldProactiveEngagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ShieldProactiveEngagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ShieldProactiveEngagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList">emergencyContactList</a></code> | <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput">emergencyContactListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput">proactiveEngagementStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus">proactiveEngagementStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `emergencyContactList`<sup>Required</sup> <a name="emergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactList"></a>

```typescript
public readonly emergencyContactList: ShieldProactiveEngagementEmergencyContactListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList">ShieldProactiveEngagementEmergencyContactListStructList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `emergencyContactListInput`<sup>Optional</sup> <a name="emergencyContactListInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.emergencyContactListInput"></a>

```typescript
public readonly emergencyContactListInput: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---

##### `proactiveEngagementStatusInput`<sup>Optional</sup> <a name="proactiveEngagementStatusInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatusInput"></a>

```typescript
public readonly proactiveEngagementStatusInput: string;
```

- *Type:* string

---

##### `proactiveEngagementStatus`<sup>Required</sup> <a name="proactiveEngagementStatus" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.proactiveEngagementStatus"></a>

```typescript
public readonly proactiveEngagementStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldProactiveEngagementConfig <a name="ShieldProactiveEngagementConfig" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

const shieldProactiveEngagementConfig: shieldProactiveEngagement.ShieldProactiveEngagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList">emergencyContactList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus">proactiveEngagementStatus</a></code> | <code>string</code> | If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `emergencyContactList`<sup>Required</sup> <a name="emergencyContactList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.emergencyContactList"></a>

```typescript
public readonly emergencyContactList: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.

To enable proactive engagement, the contact list must include at least one phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#emergency_contact_list ShieldProactiveEngagement#emergency_contact_list}

---

##### `proactiveEngagementStatus`<sup>Required</sup> <a name="proactiveEngagementStatus" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementConfig.property.proactiveEngagementStatus"></a>

```typescript
public readonly proactiveEngagementStatus: string;
```

- *Type:* string

If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.

If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#proactive_engagement_status ShieldProactiveEngagement#proactive_engagement_status}

---

### ShieldProactiveEngagementEmergencyContactListStruct <a name="ShieldProactiveEngagementEmergencyContactListStruct" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

const shieldProactiveEngagementEmergencyContactListStruct: shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress">emailAddress</a></code> | <code>string</code> | The email address for the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes">contactNotes</a></code> | <code>string</code> | Additional notes regarding the contact. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number for the contact. |

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

The email address for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#email_address ShieldProactiveEngagement#email_address}

---

##### `contactNotes`<sup>Optional</sup> <a name="contactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.contactNotes"></a>

```typescript
public readonly contactNotes: string;
```

- *Type:* string

Additional notes regarding the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#contact_notes ShieldProactiveEngagement#contact_notes}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number for the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/shield_proactive_engagement#phone_number ShieldProactiveEngagement#phone_number}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldProactiveEngagementEmergencyContactListStructList <a name="ShieldProactiveEngagementEmergencyContactListStructList" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

new shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get"></a>

```typescript
public get(index: number): ShieldProactiveEngagementEmergencyContactListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>[]

---


### ShieldProactiveEngagementEmergencyContactListStructOutputReference <a name="ShieldProactiveEngagementEmergencyContactListStructOutputReference" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer"></a>

```typescript
import { shieldProactiveEngagement } from '@cdktn/provider-awscc'

new shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes">resetContactNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContactNotes` <a name="resetContactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetContactNotes"></a>

```typescript
public resetContactNotes(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput">contactNotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes">contactNotes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contactNotesInput`<sup>Optional</sup> <a name="contactNotesInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotesInput"></a>

```typescript
public readonly contactNotesInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `contactNotes`<sup>Required</sup> <a name="contactNotes" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.contactNotes"></a>

```typescript
public readonly contactNotes: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ShieldProactiveEngagementEmergencyContactListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.shieldProactiveEngagement.ShieldProactiveEngagementEmergencyContactListStruct">ShieldProactiveEngagementEmergencyContactListStruct</a>

---



