# `datazoneSubscriptionTarget` Submodule <a name="`datazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.datazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneSubscriptionTarget <a name="DatazoneSubscriptionTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new datazoneSubscriptionTarget.DatazoneSubscriptionTarget(scope: Construct, id: string, config: DatazoneSubscriptionTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig">putSubscriptionTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole">resetManageAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName">resetProviderName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubscriptionTargetConfig` <a name="putSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig"></a>

```typescript
public putSubscriptionTargetConfig(value: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---

##### `resetManageAccessRole` <a name="resetManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole"></a>

```typescript
public resetManageAccessRole(): void
```

##### `resetProviderName` <a name="resetProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName"></a>

```typescript
public resetProviderName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneSubscriptionTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId">subscriptionTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput">applicableAssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput">authorizedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput">manageAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput">providerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput">subscriptionTargetConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes">applicableAssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals">authorizedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole">manageAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```typescript
public readonly subscriptionTargetConfig: DatazoneSubscriptionTargetSubscriptionTargetConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `subscriptionTargetId`<sup>Required</sup> <a name="subscriptionTargetId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```typescript
public readonly subscriptionTargetId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `applicableAssetTypesInput`<sup>Optional</sup> <a name="applicableAssetTypesInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput"></a>

```typescript
public readonly applicableAssetTypesInput: string[];
```

- *Type:* string[]

---

##### `authorizedPrincipalsInput`<sup>Optional</sup> <a name="authorizedPrincipalsInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput"></a>

```typescript
public readonly authorizedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `manageAccessRoleInput`<sup>Optional</sup> <a name="manageAccessRoleInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput"></a>

```typescript
public readonly manageAccessRoleInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerNameInput`<sup>Optional</sup> <a name="providerNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput"></a>

```typescript
public readonly providerNameInput: string;
```

- *Type:* string

---

##### `subscriptionTargetConfigInput`<sup>Optional</sup> <a name="subscriptionTargetConfigInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput"></a>

```typescript
public readonly subscriptionTargetConfigInput: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```typescript
public readonly applicableAssetTypes: string[];
```

- *Type:* string[]

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```typescript
public readonly authorizedPrincipals: string[];
```

- *Type:* string[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `manageAccessRole`<sup>Required</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.Initializer"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

const datazoneSubscriptionTargetConfig: datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes">applicableAssetTypes</a></code> | <code>string[]</code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals">authorizedPrincipals</a></code> | <code>string[]</code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name">name</a></code> | <code>string</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig">subscriptionTargetConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type">type</a></code> | <code>string</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole">manageAccessRole</a></code> | <code>string</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName">providerName</a></code> | <code>string</code> | The provider of the subscription target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicableAssetTypes`<sup>Required</sup> <a name="applicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes"></a>

```typescript
public readonly applicableAssetTypes: string[];
```

- *Type:* string[]

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals"></a>

```typescript
public readonly authorizedPrincipals: string[];
```

- *Type:* string[]

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `subscriptionTargetConfig`<sup>Required</sup> <a name="subscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig"></a>

```typescript
public readonly subscriptionTargetConfig: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `manageAccessRole`<sup>Optional</sup> <a name="manageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole"></a>

```typescript
public readonly manageAccessRole: string;
```

- *Type:* string

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

### DatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

const datazoneSubscriptionTargetSubscriptionTargetConfig: datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content">content</a></code> | <code>string</code> | The content of the subscription target configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName">formName</a></code> | <code>string</code> | The form name included in the subscription target configuration. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#content DatazoneSubscriptionTarget#content}

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

The form name included in the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/datazone_subscription_target#form_name DatazoneSubscriptionTarget#form_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```typescript
public get(index: number): DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>[]

---


### DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```typescript
import { datazoneSubscriptionTarget } from '@cdktn/provider-awscc'

new datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput">formNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formNameInput`<sup>Optional</sup> <a name="formNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput"></a>

```typescript
public readonly formNameInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneSubscriptionTargetSubscriptionTargetConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig">DatazoneSubscriptionTargetSubscriptionTargetConfig</a>

---



