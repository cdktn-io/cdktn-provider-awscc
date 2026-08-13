# `datazoneEnvironmentActions` Submodule <a name="`datazoneEnvironmentActions` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentActions <a name="DatazoneEnvironmentActions" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions awscc_datazone_environment_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

new datazoneEnvironmentActions.DatazoneEnvironmentActions(scope: Construct, id: string, config: DatazoneEnvironmentActionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig">DatazoneEnvironmentActionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig">DatazoneEnvironmentActionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier">resetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier">resetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters"></a>

```typescript
public putParameters(value: DatazoneEnvironmentActionsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainIdentifier` <a name="resetDomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier"></a>

```typescript
public resetDomainIdentifier(): void
```

##### `resetEnvironmentIdentifier` <a name="resetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier"></a>

```typescript
public resetEnvironmentIdentifier(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters"></a>

```typescript
public resetParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneEnvironmentActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneEnvironmentActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId">environmentActionsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput">parametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `environmentActionsId`<sup>Required</sup> <a name="environmentActionsId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId"></a>

```typescript
public readonly environmentActionsId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters"></a>

```typescript
public readonly parameters: DatazoneEnvironmentActionsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DatazoneEnvironmentActionsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentActionsConfig <a name="DatazoneEnvironmentActionsConfig" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.Initializer"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

const datazoneEnvironmentActionsConfig: datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name">name</a></code> | <code>string</code> | The name of the environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description">description</a></code> | <code>string</code> | The description of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone environment in which the action is taking place. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier">identifier</a></code> | <code>string</code> | The ID of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | The parameters of the environment action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#name DatazoneEnvironmentActions#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#description DatazoneEnvironmentActions#description}

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#domain_identifier DatazoneEnvironmentActions#domain_identifier}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The identifier of the Amazon DataZone environment in which the action is taking place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#environment_identifier DatazoneEnvironmentActions#environment_identifier}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The ID of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#identifier DatazoneEnvironmentActions#identifier}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters"></a>

```typescript
public readonly parameters: DatazoneEnvironmentActionsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

The parameters of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#parameters DatazoneEnvironmentActions#parameters}

---

### DatazoneEnvironmentActionsParameters <a name="DatazoneEnvironmentActionsParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.Initializer"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

const datazoneEnvironmentActionsParameters: datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri">uri</a></code> | <code>string</code> | The URI of the console link specified as part of the environment action. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI of the console link specified as part of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_environment_actions#uri DatazoneEnvironmentActions#uri}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentActionsParametersOutputReference <a name="DatazoneEnvironmentActionsParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer"></a>

```typescript
import { datazoneEnvironmentActions } from '@cdktn/provider-awscc'

new datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneEnvironmentActionsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---



