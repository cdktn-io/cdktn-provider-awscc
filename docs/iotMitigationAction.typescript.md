# `iotMitigationAction` Submodule <a name="`iotMitigationAction` Submodule" id="@cdktn/provider-awscc.iotMitigationAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotMitigationAction <a name="IotMitigationAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action awscc_iot_mitigation_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationAction(scope: Construct, id: string, config: IotMitigationActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig">IotMitigationActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig">IotMitigationActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams">putActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName">resetActionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionParams` <a name="putActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams"></a>

```typescript
public putActionParams(value: IotMitigationActionActionParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putActionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags"></a>

```typescript
public putTags(value: IResolvable | IotMitigationActionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]

---

##### `resetActionName` <a name="resetActionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetActionName"></a>

```typescript
public resetActionName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

iotMitigationAction.IotMitigationAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

iotMitigationAction.IotMitigationAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

iotMitigationAction.IotMitigationAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

iotMitigationAction.IotMitigationAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotMitigationAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotMitigationAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotMitigationAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotMitigationAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams">actionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn">mitigationActionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId">mitigationActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput">actionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput">actionParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParams"></a>

```typescript
public readonly actionParams: IotMitigationActionActionParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference">IotMitigationActionActionParamsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mitigationActionArn`<sup>Required</sup> <a name="mitigationActionArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionArn"></a>

```typescript
public readonly mitigationActionArn: string;
```

- *Type:* string

---

##### `mitigationActionId`<sup>Required</sup> <a name="mitigationActionId" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.mitigationActionId"></a>

```typescript
public readonly mitigationActionId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tags"></a>

```typescript
public readonly tags: IotMitigationActionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList">IotMitigationActionTagsList</a>

---

##### `actionNameInput`<sup>Optional</sup> <a name="actionNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionNameInput"></a>

```typescript
public readonly actionNameInput: string;
```

- *Type:* string

---

##### `actionParamsInput`<sup>Optional</sup> <a name="actionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionParamsInput"></a>

```typescript
public readonly actionParamsInput: IResolvable | IotMitigationActionActionParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotMitigationActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotMitigationActionActionParams <a name="IotMitigationActionActionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParams: iotMitigationAction.IotMitigationActionActionParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams">addThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams">enableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams">publishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | Parameters, to define a mitigation action that publishes findings to Amazon SNS. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams">replaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | Parameters to define a mitigation action that adds a blank policy to restrict permissions. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams">updateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the CA certificate to inactive. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams">updateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | Parameters to define a mitigation action that changes the state of the device certificate to inactive. |

---

##### `addThingsToThingGroupParams`<sup>Optional</sup> <a name="addThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.addThingsToThingGroupParams"></a>

```typescript
public readonly addThingsToThingGroupParams: IotMitigationActionActionParamsAddThingsToThingGroupParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

Parameters to define a mitigation action that moves devices associated with a certificate to one or more specified thing groups, typically for quarantine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#add_things_to_thing_group_params IotMitigationAction#add_things_to_thing_group_params}

---

##### `enableIoTLoggingParams`<sup>Optional</sup> <a name="enableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.enableIoTLoggingParams"></a>

```typescript
public readonly enableIoTLoggingParams: IotMitigationActionActionParamsEnableIoTLoggingParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

Parameters to define a mitigation action that enables AWS IoT logging at a specified level of detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#enable_io_t_logging_params IotMitigationAction#enable_io_t_logging_params}

---

##### `publishFindingToSnsParams`<sup>Optional</sup> <a name="publishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.publishFindingToSnsParams"></a>

```typescript
public readonly publishFindingToSnsParams: IotMitigationActionActionParamsPublishFindingToSnsParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

Parameters, to define a mitigation action that publishes findings to Amazon SNS.

You can implement your own custom actions in response to the Amazon SNS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#publish_finding_to_sns_params IotMitigationAction#publish_finding_to_sns_params}

---

##### `replaceDefaultPolicyVersionParams`<sup>Optional</sup> <a name="replaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.replaceDefaultPolicyVersionParams"></a>

```typescript
public readonly replaceDefaultPolicyVersionParams: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

Parameters to define a mitigation action that adds a blank policy to restrict permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#replace_default_policy_version_params IotMitigationAction#replace_default_policy_version_params}

---

##### `updateCaCertificateParams`<sup>Optional</sup> <a name="updateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateCaCertificateParams"></a>

```typescript
public readonly updateCaCertificateParams: IotMitigationActionActionParamsUpdateCaCertificateParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

Parameters to define a mitigation action that changes the state of the CA certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#update_ca_certificate_params IotMitigationAction#update_ca_certificate_params}

---

##### `updateDeviceCertificateParams`<sup>Optional</sup> <a name="updateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams.property.updateDeviceCertificateParams"></a>

```typescript
public readonly updateDeviceCertificateParams: IotMitigationActionActionParamsUpdateDeviceCertificateParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

Parameters to define a mitigation action that changes the state of the device certificate to inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#update_device_certificate_params IotMitigationAction#update_device_certificate_params}

---

### IotMitigationActionActionParamsAddThingsToThingGroupParams <a name="IotMitigationActionActionParamsAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsAddThingsToThingGroupParams: iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups">overrideDynamicGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames">thingGroupNames</a></code> | <code>string[]</code> | The list of groups to which you want to add the things that triggered the mitigation action. |

---

##### `overrideDynamicGroups`<sup>Optional</sup> <a name="overrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.overrideDynamicGroups"></a>

```typescript
public readonly overrideDynamicGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#override_dynamic_groups IotMitigationAction#override_dynamic_groups}

---

##### `thingGroupNames`<sup>Optional</sup> <a name="thingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams.property.thingGroupNames"></a>

```typescript
public readonly thingGroupNames: string[];
```

- *Type:* string[]

The list of groups to which you want to add the things that triggered the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#thing_group_names IotMitigationAction#thing_group_names}

---

### IotMitigationActionActionParamsEnableIoTLoggingParams <a name="IotMitigationActionActionParamsEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsEnableIoTLoggingParams: iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel">logLevel</a></code> | <code>string</code> | Specifies which types of information are logged. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging">roleArnForLogging</a></code> | <code>string</code> | The ARN of the IAM role used for logging. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Specifies which types of information are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#log_level IotMitigationAction#log_level}

---

##### `roleArnForLogging`<sup>Optional</sup> <a name="roleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams.property.roleArnForLogging"></a>

```typescript
public readonly roleArnForLogging: string;
```

- *Type:* string

The ARN of the IAM role used for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn_for_logging IotMitigationAction#role_arn_for_logging}

---

### IotMitigationActionActionParamsPublishFindingToSnsParams <a name="IotMitigationActionActionParamsPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsPublishFindingToSnsParams: iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn">topicArn</a></code> | <code>string</code> | The ARN of the topic to which you want to publish the findings. |

---

##### `topicArn`<sup>Optional</sup> <a name="topicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

The ARN of the topic to which you want to publish the findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#topic_arn IotMitigationAction#topic_arn}

---

### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsReplaceDefaultPolicyVersionParams: iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}. |

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#template_name IotMitigationAction#template_name}.

---

### IotMitigationActionActionParamsUpdateCaCertificateParams <a name="IotMitigationActionActionParamsUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsUpdateCaCertificateParams: iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionActionParamsUpdateDeviceCertificateParams <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionActionParamsUpdateDeviceCertificateParams: iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action IotMitigationAction#action}.

---

### IotMitigationActionConfig <a name="IotMitigationActionConfig" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionConfig: iotMitigationAction.IotMitigationActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams">actionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | The set of parameters for this mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName">actionName</a></code> | <code>string</code> | A unique identifier for the mitigation action. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionParams`<sup>Required</sup> <a name="actionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionParams"></a>

```typescript
public readonly actionParams: IotMitigationActionActionParams;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

The set of parameters for this mitigation action.

You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action_params IotMitigationAction#action_params}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#role_arn IotMitigationAction#role_arn}.

---

##### `actionName`<sup>Optional</sup> <a name="actionName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

A unique identifier for the mitigation action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#action_name IotMitigationAction#action_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotMitigationActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#tags IotMitigationAction#tags}

---

### IotMitigationActionTags <a name="IotMitigationActionTags" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

const iotMitigationActionTags: iotMitigationAction.IotMitigationActionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#key IotMitigationAction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_mitigation_action#value IotMitigationAction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference <a name="IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups">resetOverrideDynamicGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames">resetThingGroupNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOverrideDynamicGroups` <a name="resetOverrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetOverrideDynamicGroups"></a>

```typescript
public resetOverrideDynamicGroups(): void
```

##### `resetThingGroupNames` <a name="resetThingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.resetThingGroupNames"></a>

```typescript
public resetThingGroupNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput">overrideDynamicGroupsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput">thingGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups">overrideDynamicGroups</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames">thingGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrideDynamicGroupsInput`<sup>Optional</sup> <a name="overrideDynamicGroupsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroupsInput"></a>

```typescript
public readonly overrideDynamicGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `thingGroupNamesInput`<sup>Optional</sup> <a name="thingGroupNamesInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNamesInput"></a>

```typescript
public readonly thingGroupNamesInput: string[];
```

- *Type:* string[]

---

##### `overrideDynamicGroups`<sup>Required</sup> <a name="overrideDynamicGroups" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.overrideDynamicGroups"></a>

```typescript
public readonly overrideDynamicGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `thingGroupNames`<sup>Required</sup> <a name="thingGroupNames" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.thingGroupNames"></a>

```typescript
public readonly thingGroupNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsAddThingsToThingGroupParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---


### IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference <a name="IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging">resetRoleArnForLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetRoleArnForLogging` <a name="resetRoleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.resetRoleArnForLogging"></a>

```typescript
public resetRoleArnForLogging(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput">roleArnForLoggingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging">roleArnForLogging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `roleArnForLoggingInput`<sup>Optional</sup> <a name="roleArnForLoggingInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLoggingInput"></a>

```typescript
public readonly roleArnForLoggingInput: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `roleArnForLogging`<sup>Required</sup> <a name="roleArnForLogging" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.roleArnForLogging"></a>

```typescript
public readonly roleArnForLogging: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsEnableIoTLoggingParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---


### IotMitigationActionActionParamsOutputReference <a name="IotMitigationActionActionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams">putAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams">putEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams">putPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams">putReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams">putUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams">putUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams">resetAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams">resetEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams">resetPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams">resetReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams">resetUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams">resetUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddThingsToThingGroupParams` <a name="putAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams"></a>

```typescript
public putAddThingsToThingGroupParams(value: IotMitigationActionActionParamsAddThingsToThingGroupParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putAddThingsToThingGroupParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `putEnableIoTLoggingParams` <a name="putEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams"></a>

```typescript
public putEnableIoTLoggingParams(value: IotMitigationActionActionParamsEnableIoTLoggingParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putEnableIoTLoggingParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `putPublishFindingToSnsParams` <a name="putPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams"></a>

```typescript
public putPublishFindingToSnsParams(value: IotMitigationActionActionParamsPublishFindingToSnsParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putPublishFindingToSnsParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `putReplaceDefaultPolicyVersionParams` <a name="putReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams"></a>

```typescript
public putReplaceDefaultPolicyVersionParams(value: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putReplaceDefaultPolicyVersionParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `putUpdateCaCertificateParams` <a name="putUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams"></a>

```typescript
public putUpdateCaCertificateParams(value: IotMitigationActionActionParamsUpdateCaCertificateParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateCaCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `putUpdateDeviceCertificateParams` <a name="putUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams"></a>

```typescript
public putUpdateDeviceCertificateParams(value: IotMitigationActionActionParamsUpdateDeviceCertificateParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.putUpdateDeviceCertificateParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `resetAddThingsToThingGroupParams` <a name="resetAddThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetAddThingsToThingGroupParams"></a>

```typescript
public resetAddThingsToThingGroupParams(): void
```

##### `resetEnableIoTLoggingParams` <a name="resetEnableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetEnableIoTLoggingParams"></a>

```typescript
public resetEnableIoTLoggingParams(): void
```

##### `resetPublishFindingToSnsParams` <a name="resetPublishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetPublishFindingToSnsParams"></a>

```typescript
public resetPublishFindingToSnsParams(): void
```

##### `resetReplaceDefaultPolicyVersionParams` <a name="resetReplaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetReplaceDefaultPolicyVersionParams"></a>

```typescript
public resetReplaceDefaultPolicyVersionParams(): void
```

##### `resetUpdateCaCertificateParams` <a name="resetUpdateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateCaCertificateParams"></a>

```typescript
public resetUpdateCaCertificateParams(): void
```

##### `resetUpdateDeviceCertificateParams` <a name="resetUpdateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.resetUpdateDeviceCertificateParams"></a>

```typescript
public resetUpdateDeviceCertificateParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams">addThingsToThingGroupParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams">enableIoTLoggingParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams">publishFindingToSnsParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams">replaceDefaultPolicyVersionParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams">updateCaCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams">updateDeviceCertificateParams</a></code> | <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput">addThingsToThingGroupParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput">enableIoTLoggingParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput">publishFindingToSnsParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput">replaceDefaultPolicyVersionParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput">updateCaCertificateParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput">updateDeviceCertificateParamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addThingsToThingGroupParams`<sup>Required</sup> <a name="addThingsToThingGroupParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParams"></a>

```typescript
public readonly addThingsToThingGroupParams: IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference">IotMitigationActionActionParamsAddThingsToThingGroupParamsOutputReference</a>

---

##### `enableIoTLoggingParams`<sup>Required</sup> <a name="enableIoTLoggingParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParams"></a>

```typescript
public readonly enableIoTLoggingParams: IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference">IotMitigationActionActionParamsEnableIoTLoggingParamsOutputReference</a>

---

##### `publishFindingToSnsParams`<sup>Required</sup> <a name="publishFindingToSnsParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParams"></a>

```typescript
public readonly publishFindingToSnsParams: IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference">IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference</a>

---

##### `replaceDefaultPolicyVersionParams`<sup>Required</sup> <a name="replaceDefaultPolicyVersionParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParams"></a>

```typescript
public readonly replaceDefaultPolicyVersionParams: IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference</a>

---

##### `updateCaCertificateParams`<sup>Required</sup> <a name="updateCaCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParams"></a>

```typescript
public readonly updateCaCertificateParams: IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference</a>

---

##### `updateDeviceCertificateParams`<sup>Required</sup> <a name="updateDeviceCertificateParams" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParams"></a>

```typescript
public readonly updateDeviceCertificateParams: IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference">IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference</a>

---

##### `addThingsToThingGroupParamsInput`<sup>Optional</sup> <a name="addThingsToThingGroupParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.addThingsToThingGroupParamsInput"></a>

```typescript
public readonly addThingsToThingGroupParamsInput: IResolvable | IotMitigationActionActionParamsAddThingsToThingGroupParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsAddThingsToThingGroupParams">IotMitigationActionActionParamsAddThingsToThingGroupParams</a>

---

##### `enableIoTLoggingParamsInput`<sup>Optional</sup> <a name="enableIoTLoggingParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.enableIoTLoggingParamsInput"></a>

```typescript
public readonly enableIoTLoggingParamsInput: IResolvable | IotMitigationActionActionParamsEnableIoTLoggingParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsEnableIoTLoggingParams">IotMitigationActionActionParamsEnableIoTLoggingParams</a>

---

##### `publishFindingToSnsParamsInput`<sup>Optional</sup> <a name="publishFindingToSnsParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.publishFindingToSnsParamsInput"></a>

```typescript
public readonly publishFindingToSnsParamsInput: IResolvable | IotMitigationActionActionParamsPublishFindingToSnsParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---

##### `replaceDefaultPolicyVersionParamsInput`<sup>Optional</sup> <a name="replaceDefaultPolicyVersionParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.replaceDefaultPolicyVersionParamsInput"></a>

```typescript
public readonly replaceDefaultPolicyVersionParamsInput: IResolvable | IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---

##### `updateCaCertificateParamsInput`<sup>Optional</sup> <a name="updateCaCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateCaCertificateParamsInput"></a>

```typescript
public readonly updateCaCertificateParamsInput: IResolvable | IotMitigationActionActionParamsUpdateCaCertificateParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---

##### `updateDeviceCertificateParamsInput`<sup>Optional</sup> <a name="updateDeviceCertificateParamsInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.updateDeviceCertificateParamsInput"></a>

```typescript
public readonly updateDeviceCertificateParamsInput: IResolvable | IotMitigationActionActionParamsUpdateDeviceCertificateParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParams">IotMitigationActionActionParams</a>

---


### IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference <a name="IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn">resetTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopicArn` <a name="resetTopicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.resetTopicArn"></a>

```typescript
public resetTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsPublishFindingToSnsParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsPublishFindingToSnsParams">IotMitigationActionActionParamsPublishFindingToSnsParams</a>

---


### IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference <a name="IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName">resetTemplateName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams">IotMitigationActionActionParamsReplaceDefaultPolicyVersionParams</a>

---


### IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsUpdateCaCertificateParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateCaCertificateParams">IotMitigationActionActionParamsUpdateCaCertificateParams</a>

---


### IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference <a name="IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction">resetAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionActionParamsUpdateDeviceCertificateParams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionActionParamsUpdateDeviceCertificateParams">IotMitigationActionActionParamsUpdateDeviceCertificateParams</a>

---


### IotMitigationActionTagsList <a name="IotMitigationActionTagsList" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get"></a>

```typescript
public get(index: number): IotMitigationActionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>[]

---


### IotMitigationActionTagsOutputReference <a name="IotMitigationActionTagsOutputReference" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer"></a>

```typescript
import { iotMitigationAction } from '@cdktn/provider-awscc'

new iotMitigationAction.IotMitigationActionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotMitigationActionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotMitigationAction.IotMitigationActionTags">IotMitigationActionTags</a>

---



