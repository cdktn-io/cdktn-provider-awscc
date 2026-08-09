# `datazoneDataSource` Submodule <a name="`datazoneDataSource` Submodule" id="@cdktn/provider-awscc.datazoneDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDataSource <a name="DatazoneDataSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source awscc_datazone_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSource(scope: Construct, id: string, config: DatazoneDataSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig">DatazoneDataSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput">putAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation">putRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput">resetAssetFormsInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier">resetConnectionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting">resetEnableSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier">resetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport">resetPublishOnImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation">resetRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssetFormsInput` <a name="putAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput"></a>

```typescript
public putAssetFormsInput(value: IResolvable | DatazoneDataSourceAssetFormsInput[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putAssetFormsInput.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration"></a>

```typescript
public putConfiguration(value: DatazoneDataSourceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `putRecommendation` <a name="putRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation"></a>

```typescript
public putRecommendation(value: DatazoneDataSourceRecommendation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putRecommendation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule"></a>

```typescript
public putSchedule(value: DatazoneDataSourceSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `resetAssetFormsInput` <a name="resetAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetAssetFormsInput"></a>

```typescript
public resetAssetFormsInput(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetConnectionIdentifier` <a name="resetConnectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetConnectionIdentifier"></a>

```typescript
public resetConnectionIdentifier(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableSetting` <a name="resetEnableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnableSetting"></a>

```typescript
public resetEnableSetting(): void
```

##### `resetEnvironmentIdentifier` <a name="resetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetEnvironmentIdentifier"></a>

```typescript
public resetEnvironmentIdentifier(): void
```

##### `resetPublishOnImport` <a name="resetPublishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetPublishOnImport"></a>

```typescript
public resetPublishOnImport(): void
```

##### `resetRecommendation` <a name="resetRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetRecommendation"></a>

```typescript
public resetRecommendation(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

datazoneDataSource.DatazoneDataSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

datazoneDataSource.DatazoneDataSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

datazoneDataSource.DatazoneDataSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

datazoneDataSource.DatazoneDataSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazoneDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazoneDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazoneDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput">assetFormsInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount">lastRunAssetCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt">lastRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus">lastRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation">recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput">assetFormsInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput">configurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput">connectionIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput">enableSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput">publishOnImportInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput">recommendationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput">scheduleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier">connectionIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting">enableSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport">publishOnImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assetFormsInput`<sup>Required</sup> <a name="assetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInput"></a>

```typescript
public readonly assetFormsInput: DatazoneDataSourceAssetFormsInputList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList">DatazoneDataSourceAssetFormsInputList</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configuration"></a>

```typescript
public readonly configuration: DatazoneDataSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference">DatazoneDataSourceConfigurationOutputReference</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastRunAssetCount`<sup>Required</sup> <a name="lastRunAssetCount" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAssetCount"></a>

```typescript
public readonly lastRunAssetCount: number;
```

- *Type:* number

---

##### `lastRunAt`<sup>Required</sup> <a name="lastRunAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunAt"></a>

```typescript
public readonly lastRunAt: string;
```

- *Type:* string

---

##### `lastRunStatus`<sup>Required</sup> <a name="lastRunStatus" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.lastRunStatus"></a>

```typescript
public readonly lastRunStatus: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `recommendation`<sup>Required</sup> <a name="recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendation"></a>

```typescript
public readonly recommendation: DatazoneDataSourceRecommendationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference">DatazoneDataSourceRecommendationOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.schedule"></a>

```typescript
public readonly schedule: DatazoneDataSourceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference">DatazoneDataSourceScheduleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `assetFormsInputInput`<sup>Optional</sup> <a name="assetFormsInputInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.assetFormsInputInput"></a>

```typescript
public readonly assetFormsInputInput: IResolvable | DatazoneDataSourceAssetFormsInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.configurationInput"></a>

```typescript
public readonly configurationInput: IResolvable | DatazoneDataSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---

##### `connectionIdentifierInput`<sup>Optional</sup> <a name="connectionIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifierInput"></a>

```typescript
public readonly connectionIdentifierInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `enableSettingInput`<sup>Optional</sup> <a name="enableSettingInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSettingInput"></a>

```typescript
public readonly enableSettingInput: string;
```

- *Type:* string

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifierInput"></a>

```typescript
public readonly projectIdentifierInput: string;
```

- *Type:* string

---

##### `publishOnImportInput`<sup>Optional</sup> <a name="publishOnImportInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImportInput"></a>

```typescript
public readonly publishOnImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recommendationInput`<sup>Optional</sup> <a name="recommendationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.recommendationInput"></a>

```typescript
public readonly recommendationInput: IResolvable | DatazoneDataSourceRecommendation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DatazoneDataSourceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `connectionIdentifier`<sup>Required</sup> <a name="connectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.connectionIdentifier"></a>

```typescript
public readonly connectionIdentifier: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `enableSetting`<sup>Required</sup> <a name="enableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.enableSetting"></a>

```typescript
public readonly enableSetting: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

##### `publishOnImport`<sup>Required</sup> <a name="publishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.publishOnImport"></a>

```typescript
public readonly publishOnImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDataSourceAssetFormsInput <a name="DatazoneDataSourceAssetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceAssetFormsInput: datazoneDataSource.DatazoneDataSourceAssetFormsInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content">content</a></code> | <code>string</code> | The content of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName">formName</a></code> | <code>string</code> | The name of the metadata form. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier">typeIdentifier</a></code> | <code>string</code> | The ID of the metadata form type. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision">typeRevision</a></code> | <code>string</code> | The revision of the metadata form type. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#content DatazoneDataSource#content}

---

##### `formName`<sup>Optional</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

The name of the metadata form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#form_name DatazoneDataSource#form_name}

---

##### `typeIdentifier`<sup>Optional</sup> <a name="typeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeIdentifier"></a>

```typescript
public readonly typeIdentifier: string;
```

- *Type:* string

The ID of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type_identifier DatazoneDataSource#type_identifier}

---

##### `typeRevision`<sup>Optional</sup> <a name="typeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput.property.typeRevision"></a>

```typescript
public readonly typeRevision: string;
```

- *Type:* string

The revision of the metadata form type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type_revision DatazoneDataSource#type_revision}

---

### DatazoneDataSourceConfig <a name="DatazoneDataSourceConfig" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfig: datazoneDataSource.DatazoneDataSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | The ID of the Amazon DataZone domain where the data source is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name">name</a></code> | <code>string</code> | The name of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | The identifier of the Amazon DataZone project in which you want to add the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type">type</a></code> | <code>string</code> | The type of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput">assetFormsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | The metadata forms that are to be attached to the assets that this data source works with. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier">connectionIdentifier</a></code> | <code>string</code> | The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description">description</a></code> | <code>string</code> | The description of the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting">enableSetting</a></code> | <code>string</code> | Specifies whether the data source is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | The unique identifier of the Amazon DataZone environment to which the data source publishes assets. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport">publishOnImport</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation">recommendation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | Specifies whether the business name generation is to be enabled for this data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | The schedule of the data source runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

The ID of the Amazon DataZone domain where the data source is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#domain_identifier DatazoneDataSource#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#name DatazoneDataSource#name}

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

The identifier of the Amazon DataZone project in which you want to add the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#project_identifier DatazoneDataSource#project_identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

##### `assetFormsInput`<sup>Optional</sup> <a name="assetFormsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.assetFormsInput"></a>

```typescript
public readonly assetFormsInput: IResolvable | DatazoneDataSourceAssetFormsInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

The metadata forms that are to be attached to the assets that this data source works with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#asset_forms_input DatazoneDataSource#asset_forms_input}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.configuration"></a>

```typescript
public readonly configuration: DatazoneDataSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#configuration DatazoneDataSource#configuration}

---

##### `connectionIdentifier`<sup>Optional</sup> <a name="connectionIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.connectionIdentifier"></a>

```typescript
public readonly connectionIdentifier: string;
```

- *Type:* string

The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#connection_identifier DatazoneDataSource#connection_identifier}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#description DatazoneDataSource#description}

---

##### `enableSetting`<sup>Optional</sup> <a name="enableSetting" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.enableSetting"></a>

```typescript
public readonly enableSetting: string;
```

- *Type:* string

Specifies whether the data source is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#enable_setting DatazoneDataSource#enable_setting}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

The unique identifier of the Amazon DataZone environment to which the data source publishes assets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#environment_identifier DatazoneDataSource#environment_identifier}

---

##### `publishOnImport`<sup>Optional</sup> <a name="publishOnImport" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.publishOnImport"></a>

```typescript
public readonly publishOnImport: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#publish_on_import DatazoneDataSource#publish_on_import}

---

##### `recommendation`<sup>Optional</sup> <a name="recommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.recommendation"></a>

```typescript
public readonly recommendation: DatazoneDataSourceRecommendation;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

Specifies whether the business name generation is to be enabled for this data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#recommendation DatazoneDataSource#recommendation}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfig.property.schedule"></a>

```typescript
public readonly schedule: DatazoneDataSourceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

### DatazoneDataSourceConfiguration <a name="DatazoneDataSourceConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfiguration: datazoneDataSource.DatazoneDataSourceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration">glueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration">redshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | The configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration">sageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | The configuration details of the Amazon SageMaker data source. |

---

##### `glueRunConfiguration`<sup>Optional</sup> <a name="glueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.glueRunConfiguration"></a>

```typescript
public readonly glueRunConfiguration: DatazoneDataSourceConfigurationGlueRunConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#glue_run_configuration DatazoneDataSource#glue_run_configuration}.

---

##### `redshiftRunConfiguration`<sup>Optional</sup> <a name="redshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.redshiftRunConfiguration"></a>

```typescript
public readonly redshiftRunConfiguration: DatazoneDataSourceConfigurationRedshiftRunConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

The configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_run_configuration DatazoneDataSource#redshift_run_configuration}

---

##### `sageMakerRunConfiguration`<sup>Optional</sup> <a name="sageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration.property.sageMakerRunConfiguration"></a>

```typescript
public readonly sageMakerRunConfiguration: DatazoneDataSourceConfigurationSageMakerRunConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

The configuration details of the Amazon SageMaker data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#sage_maker_run_configuration DatazoneDataSource#sage_maker_run_configuration}

---

### DatazoneDataSourceConfigurationGlueRunConfiguration <a name="DatazoneDataSourceConfigurationGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationGlueRunConfiguration: datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult">autoImportDataQualityResult</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to automatically import data quality metrics as part of the data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName">catalogName</a></code> | <code>string</code> | The catalog name in the AWS Glue run configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole">dataAccessRole</a></code> | <code>string</code> | The data access role included in the configuration details of the AWS Glue data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations">relationalFilterConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | The relational filter configurations included in the configuration details of the AWS Glue data source. |

---

##### `autoImportDataQualityResult`<sup>Optional</sup> <a name="autoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.autoImportDataQualityResult"></a>

```typescript
public readonly autoImportDataQualityResult: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to automatically import data quality metrics as part of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#auto_import_data_quality_result DatazoneDataSource#auto_import_data_quality_result}

---

##### `catalogName`<sup>Optional</sup> <a name="catalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

The catalog name in the AWS Glue run configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#catalog_name DatazoneDataSource#catalog_name}

---

##### `dataAccessRole`<sup>Optional</sup> <a name="dataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: string;
```

- *Type:* string

The data access role included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `relationalFilterConfigurations`<sup>Optional</sup> <a name="relationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration.property.relationalFilterConfigurations"></a>

```typescript
public readonly relationalFilterConfigurations: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

The relational filter configurations included in the configuration details of the AWS Glue data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations: datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName">databaseName</a></code> | <code>string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions">filterExpressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName">schemaName</a></code> | <code>string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `filterExpressions`<sup>Optional</sup> <a name="filterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```typescript
public readonly filterExpressions: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions: datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">type</a></code> | <code>string</code> | The search filter expression type. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationRedshiftRunConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfiguration: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole">dataAccessRole</a></code> | <code>string</code> | The data access role included in the configuration details of the Amazon Redshift data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration">redshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | The details of the credentials required to access an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage">redshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations">relationalFilterConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | The relational filter configurations included in the configuration details of the Amazon Redshift data source. |

---

##### `dataAccessRole`<sup>Optional</sup> <a name="dataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: string;
```

- *Type:* string

The data access role included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#data_access_role DatazoneDataSource#data_access_role}

---

##### `redshiftCredentialConfiguration`<sup>Optional</sup> <a name="redshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftCredentialConfiguration"></a>

```typescript
public readonly redshiftCredentialConfiguration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

The details of the credentials required to access an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_credential_configuration DatazoneDataSource#redshift_credential_configuration}

---

##### `redshiftStorage`<sup>Optional</sup> <a name="redshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.redshiftStorage"></a>

```typescript
public readonly redshiftStorage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_storage DatazoneDataSource#redshift_storage}

---

##### `relationalFilterConfigurations`<sup>Optional</sup> <a name="relationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration.property.relationalFilterConfigurations"></a>

```typescript
public readonly relationalFilterConfigurations: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

The relational filter configurations included in the configuration details of the Amazon Redshift data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#relational_filter_configurations DatazoneDataSource#relational_filter_configurations}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | The ARN of a secret manager for an Amazon Redshift cluster. |

---

##### `secretManagerArn`<sup>Optional</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

The ARN of a secret manager for an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#secret_manager_arn DatazoneDataSource#secret_manager_arn}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource">redshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | The name of an Amazon Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource">redshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | The details of the Amazon Redshift Serverless workgroup storage. |

---

##### `redshiftClusterSource`<sup>Optional</sup> <a name="redshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftClusterSource"></a>

```typescript
public readonly redshiftClusterSource: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_cluster_source DatazoneDataSource#redshift_cluster_source}

---

##### `redshiftServerlessSource`<sup>Optional</sup> <a name="redshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage.property.redshiftServerlessSource"></a>

```typescript
public readonly redshiftServerlessSource: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

The details of the Amazon Redshift Serverless workgroup storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#redshift_serverless_source DatazoneDataSource#redshift_serverless_source}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName">clusterName</a></code> | <code>string</code> | The name of an Amazon Redshift cluster. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of an Amazon Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#cluster_name DatazoneDataSource#cluster_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName">workgroupName</a></code> | <code>string</code> | The name of the Amazon Redshift Serverless workgroup. |

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

The name of the Amazon Redshift Serverless workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#workgroup_name DatazoneDataSource#workgroup_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName">databaseName</a></code> | <code>string</code> | The database name specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions">filterExpressions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | The filter expressions specified in the relational filter configuration for the data source. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName">schemaName</a></code> | <code>string</code> | The schema name specified in the relational filter configuration for the data source. |

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#database_name DatazoneDataSource#database_name}

---

##### `filterExpressions`<sup>Optional</sup> <a name="filterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.filterExpressions"></a>

```typescript
public readonly filterExpressions: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

The filter expressions specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#filter_expressions DatazoneDataSource#filter_expressions}

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The schema name specified in the relational filter configuration for the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schema_name DatazoneDataSource#schema_name}

---

### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions: datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type">type</a></code> | <code>string</code> | The search filter expression type. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#expression DatazoneDataSource#expression}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The search filter expression type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#type DatazoneDataSource#type}

---

### DatazoneDataSourceConfigurationSageMakerRunConfiguration <a name="DatazoneDataSourceConfigurationSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceConfigurationSageMakerRunConfiguration: datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets">trackingAssets</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | The tracking assets of the Amazon SageMaker run. |

---

##### `trackingAssets`<sup>Optional</sup> <a name="trackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration.property.trackingAssets"></a>

```typescript
public readonly trackingAssets: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

The tracking assets of the Amazon SageMaker run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#tracking_assets DatazoneDataSource#tracking_assets}

---

### DatazoneDataSourceRecommendation <a name="DatazoneDataSourceRecommendation" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceRecommendation: datazoneDataSource.DatazoneDataSourceRecommendation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration">enableBusinessNameGeneration</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration. |

---

##### `enableBusinessNameGeneration`<sup>Optional</sup> <a name="enableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation.property.enableBusinessNameGeneration"></a>

```typescript
public readonly enableBusinessNameGeneration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#enable_business_name_generation DatazoneDataSource#enable_business_name_generation}

---

### DatazoneDataSourceSchedule <a name="DatazoneDataSourceSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

const datazoneDataSourceSchedule: datazoneDataSource.DatazoneDataSourceSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule">schedule</a></code> | <code>string</code> | The schedule of the data source runs. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone">timezone</a></code> | <code>string</code> | The timezone of the data source run. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The schedule of the data source runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#schedule DatazoneDataSource#schedule}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

The timezone of the data source run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_data_source#timezone DatazoneDataSource#timezone}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDataSourceAssetFormsInputList <a name="DatazoneDataSourceAssetFormsInputList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceAssetFormsInputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get"></a>

```typescript
public get(index: number): DatazoneDataSourceAssetFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceAssetFormsInput[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>[]

---


### DatazoneDataSourceAssetFormsInputOutputReference <a name="DatazoneDataSourceAssetFormsInputOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName">resetFormName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier">resetTypeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision">resetTypeRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetFormName` <a name="resetFormName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetFormName"></a>

```typescript
public resetFormName(): void
```

##### `resetTypeIdentifier` <a name="resetTypeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeIdentifier"></a>

```typescript
public resetTypeIdentifier(): void
```

##### `resetTypeRevision` <a name="resetTypeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.resetTypeRevision"></a>

```typescript
public resetTypeRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput">formNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput">typeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput">typeRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName">formName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier">typeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision">typeRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `formNameInput`<sup>Optional</sup> <a name="formNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formNameInput"></a>

```typescript
public readonly formNameInput: string;
```

- *Type:* string

---

##### `typeIdentifierInput`<sup>Optional</sup> <a name="typeIdentifierInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifierInput"></a>

```typescript
public readonly typeIdentifierInput: string;
```

- *Type:* string

---

##### `typeRevisionInput`<sup>Optional</sup> <a name="typeRevisionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevisionInput"></a>

```typescript
public readonly typeRevisionInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `formName`<sup>Required</sup> <a name="formName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.formName"></a>

```typescript
public readonly formName: string;
```

- *Type:* string

---

##### `typeIdentifier`<sup>Required</sup> <a name="typeIdentifier" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeIdentifier"></a>

```typescript
public readonly typeIdentifier: string;
```

- *Type:* string

---

##### `typeRevision`<sup>Required</sup> <a name="typeRevision" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.typeRevision"></a>

```typescript
public readonly typeRevision: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceAssetFormsInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceAssetFormsInput">DatazoneDataSourceAssetFormsInput</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations">putRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult">resetAutoImportDataQualityResult</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName">resetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole">resetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations">resetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRelationalFilterConfigurations` <a name="putRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```typescript
public putRelationalFilterConfigurations(value: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `resetAutoImportDataQualityResult` <a name="resetAutoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetAutoImportDataQualityResult"></a>

```typescript
public resetAutoImportDataQualityResult(): void
```

##### `resetCatalogName` <a name="resetCatalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetCatalogName"></a>

```typescript
public resetCatalogName(): void
```

##### `resetDataAccessRole` <a name="resetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetDataAccessRole"></a>

```typescript
public resetDataAccessRole(): void
```

##### `resetRelationalFilterConfigurations` <a name="resetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```typescript
public resetRelationalFilterConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations">relationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput">autoImportDataQualityResultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput">dataAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">relationalFilterConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult">autoImportDataQualityResult</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole">dataAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relationalFilterConfigurations`<sup>Required</sup> <a name="relationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```typescript
public readonly relationalFilterConfigurations: DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `autoImportDataQualityResultInput`<sup>Optional</sup> <a name="autoImportDataQualityResultInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResultInput"></a>

```typescript
public readonly autoImportDataQualityResultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `dataAccessRoleInput`<sup>Optional</sup> <a name="dataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```typescript
public readonly dataAccessRoleInput: string;
```

- *Type:* string

---

##### `relationalFilterConfigurationsInput`<sup>Optional</sup> <a name="relationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```typescript
public readonly relationalFilterConfigurationsInput: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `autoImportDataQualityResult`<sup>Required</sup> <a name="autoImportDataQualityResult" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.autoImportDataQualityResult"></a>

```typescript
public readonly autoImportDataQualityResult: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `dataAccessRole`<sup>Required</sup> <a name="dataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationGlueRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```typescript
public get(index: number): DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get"></a>

```typescript
public get(index: number): DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>[]

---


### DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">putFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">resetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterExpressions` <a name="putFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```typescript
public putFilterExpressions(value: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetFilterExpressions` <a name="resetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```typescript
public resetFilterExpressions(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">filterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">filterExpressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterExpressions`<sup>Required</sup> <a name="filterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```typescript
public readonly filterExpressions: DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `filterExpressionsInput`<sup>Optional</sup> <a name="filterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```typescript
public readonly filterExpressionsInput: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationGlueRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationOutputReference <a name="DatazoneDataSourceConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration">putGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration">putRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration">putSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration">resetGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration">resetRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration">resetSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueRunConfiguration` <a name="putGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration"></a>

```typescript
public putGlueRunConfiguration(value: DatazoneDataSourceConfigurationGlueRunConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putGlueRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `putRedshiftRunConfiguration` <a name="putRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration"></a>

```typescript
public putRedshiftRunConfiguration(value: DatazoneDataSourceConfigurationRedshiftRunConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putRedshiftRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `putSageMakerRunConfiguration` <a name="putSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration"></a>

```typescript
public putSageMakerRunConfiguration(value: DatazoneDataSourceConfigurationSageMakerRunConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.putSageMakerRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `resetGlueRunConfiguration` <a name="resetGlueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetGlueRunConfiguration"></a>

```typescript
public resetGlueRunConfiguration(): void
```

##### `resetRedshiftRunConfiguration` <a name="resetRedshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetRedshiftRunConfiguration"></a>

```typescript
public resetRedshiftRunConfiguration(): void
```

##### `resetSageMakerRunConfiguration` <a name="resetSageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.resetSageMakerRunConfiguration"></a>

```typescript
public resetSageMakerRunConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration">glueRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration">redshiftRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration">sageMakerRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput">glueRunConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput">redshiftRunConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput">sageMakerRunConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueRunConfiguration`<sup>Required</sup> <a name="glueRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfiguration"></a>

```typescript
public readonly glueRunConfiguration: DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference">DatazoneDataSourceConfigurationGlueRunConfigurationOutputReference</a>

---

##### `redshiftRunConfiguration`<sup>Required</sup> <a name="redshiftRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfiguration"></a>

```typescript
public readonly redshiftRunConfiguration: DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference</a>

---

##### `sageMakerRunConfiguration`<sup>Required</sup> <a name="sageMakerRunConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfiguration"></a>

```typescript
public readonly sageMakerRunConfiguration: DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference">DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference</a>

---

##### `glueRunConfigurationInput`<sup>Optional</sup> <a name="glueRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.glueRunConfigurationInput"></a>

```typescript
public readonly glueRunConfigurationInput: IResolvable | DatazoneDataSourceConfigurationGlueRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationGlueRunConfiguration">DatazoneDataSourceConfigurationGlueRunConfiguration</a>

---

##### `redshiftRunConfigurationInput`<sup>Optional</sup> <a name="redshiftRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.redshiftRunConfigurationInput"></a>

```typescript
public readonly redshiftRunConfigurationInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---

##### `sageMakerRunConfigurationInput`<sup>Optional</sup> <a name="sageMakerRunConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.sageMakerRunConfigurationInput"></a>

```typescript
public readonly sageMakerRunConfigurationInput: IResolvable | DatazoneDataSourceConfigurationSageMakerRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfiguration">DatazoneDataSourceConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration">putRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage">putRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations">putRelationalFilterConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole">resetDataAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration">resetRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage">resetRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations">resetRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedshiftCredentialConfiguration` <a name="putRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration"></a>

```typescript
public putRedshiftCredentialConfiguration(value: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftCredentialConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `putRedshiftStorage` <a name="putRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage"></a>

```typescript
public putRedshiftStorage(value: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRedshiftStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `putRelationalFilterConfigurations` <a name="putRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations"></a>

```typescript
public putRelationalFilterConfigurations(value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.putRelationalFilterConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `resetDataAccessRole` <a name="resetDataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetDataAccessRole"></a>

```typescript
public resetDataAccessRole(): void
```

##### `resetRedshiftCredentialConfiguration` <a name="resetRedshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftCredentialConfiguration"></a>

```typescript
public resetRedshiftCredentialConfiguration(): void
```

##### `resetRedshiftStorage` <a name="resetRedshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRedshiftStorage"></a>

```typescript
public resetRedshiftStorage(): void
```

##### `resetRelationalFilterConfigurations` <a name="resetRelationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.resetRelationalFilterConfigurations"></a>

```typescript
public resetRelationalFilterConfigurations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration">redshiftCredentialConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage">redshiftStorage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations">relationalFilterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput">dataAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput">redshiftCredentialConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput">redshiftStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput">relationalFilterConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole">dataAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redshiftCredentialConfiguration`<sup>Required</sup> <a name="redshiftCredentialConfiguration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfiguration"></a>

```typescript
public readonly redshiftCredentialConfiguration: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference</a>

---

##### `redshiftStorage`<sup>Required</sup> <a name="redshiftStorage" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorage"></a>

```typescript
public readonly redshiftStorage: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference</a>

---

##### `relationalFilterConfigurations`<sup>Required</sup> <a name="relationalFilterConfigurations" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurations"></a>

```typescript
public readonly relationalFilterConfigurations: DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList</a>

---

##### `dataAccessRoleInput`<sup>Optional</sup> <a name="dataAccessRoleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRoleInput"></a>

```typescript
public readonly dataAccessRoleInput: string;
```

- *Type:* string

---

##### `redshiftCredentialConfigurationInput`<sup>Optional</sup> <a name="redshiftCredentialConfigurationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftCredentialConfigurationInput"></a>

```typescript
public readonly redshiftCredentialConfigurationInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---

##### `redshiftStorageInput`<sup>Optional</sup> <a name="redshiftStorageInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.redshiftStorageInput"></a>

```typescript
public readonly redshiftStorageInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---

##### `relationalFilterConfigurationsInput`<sup>Optional</sup> <a name="relationalFilterConfigurationsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.relationalFilterConfigurationsInput"></a>

```typescript
public readonly relationalFilterConfigurationsInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---

##### `dataAccessRole`<sup>Required</sup> <a name="dataAccessRole" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.dataAccessRole"></a>

```typescript
public readonly dataAccessRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn">resetSecretManagerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretManagerArn` <a name="resetSecretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.resetSecretManagerArn"></a>

```typescript
public resetSecretManagerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput">secretManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretManagerArnInput`<sup>Optional</sup> <a name="secretManagerArnInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArnInput"></a>

```typescript
public readonly secretManagerArnInput: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftCredentialConfiguration</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource">putRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource">putRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource">resetRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource">resetRedshiftServerlessSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRedshiftClusterSource` <a name="putRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource"></a>

```typescript
public putRedshiftClusterSource(value: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftClusterSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `putRedshiftServerlessSource` <a name="putRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource"></a>

```typescript
public putRedshiftServerlessSource(value: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.putRedshiftServerlessSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `resetRedshiftClusterSource` <a name="resetRedshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftClusterSource"></a>

```typescript
public resetRedshiftClusterSource(): void
```

##### `resetRedshiftServerlessSource` <a name="resetRedshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.resetRedshiftServerlessSource"></a>

```typescript
public resetRedshiftServerlessSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource">redshiftClusterSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource">redshiftServerlessSource</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput">redshiftClusterSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput">redshiftServerlessSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redshiftClusterSource`<sup>Required</sup> <a name="redshiftClusterSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSource"></a>

```typescript
public readonly redshiftClusterSource: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference</a>

---

##### `redshiftServerlessSource`<sup>Required</sup> <a name="redshiftServerlessSource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSource"></a>

```typescript
public readonly redshiftServerlessSource: DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference</a>

---

##### `redshiftClusterSourceInput`<sup>Optional</sup> <a name="redshiftClusterSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftClusterSourceInput"></a>

```typescript
public readonly redshiftClusterSourceInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---

##### `redshiftServerlessSourceInput`<sup>Optional</sup> <a name="redshiftServerlessSourceInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.redshiftServerlessSourceInput"></a>

```typescript
public readonly redshiftServerlessSourceInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorage</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftClusterSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.resetWorkgroupName"></a>

```typescript
public resetWorkgroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput">workgroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName">workgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupNameInput"></a>

```typescript
public readonly workgroupNameInput: string;
```

- *Type:* string

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.workgroupName"></a>

```typescript
public readonly workgroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource">DatazoneDataSourceConfigurationRedshiftRunConfigurationRedshiftStorageRedshiftServerlessSource</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get"></a>

```typescript
public get(index: number): DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get"></a>

```typescript
public get(index: number): DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>[]

---


### DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference <a name="DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions">putFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions">resetFilterExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterExpressions` <a name="putFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions"></a>

```typescript
public putFilterExpressions(value: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.putFilterExpressions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetFilterExpressions` <a name="resetFilterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetFilterExpressions"></a>

```typescript
public resetFilterExpressions(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions">filterExpressions</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput">filterExpressionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterExpressions`<sup>Required</sup> <a name="filterExpressions" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressions"></a>

```typescript
public readonly filterExpressions: DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressionsList</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `filterExpressionsInput`<sup>Optional</sup> <a name="filterExpressionsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.filterExpressionsInput"></a>

```typescript
public readonly filterExpressionsInput: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsFilterExpressions</a>[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations">DatazoneDataSourceConfigurationRedshiftRunConfigurationRelationalFilterConfigurations</a>

---


### DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference <a name="DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets">resetTrackingAssets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrackingAssets` <a name="resetTrackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.resetTrackingAssets"></a>

```typescript
public resetTrackingAssets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput">trackingAssetsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets">trackingAssets</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trackingAssetsInput`<sup>Optional</sup> <a name="trackingAssetsInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssetsInput"></a>

```typescript
public readonly trackingAssetsInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `trackingAssets`<sup>Required</sup> <a name="trackingAssets" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.trackingAssets"></a>

```typescript
public readonly trackingAssets: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceConfigurationSageMakerRunConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceConfigurationSageMakerRunConfiguration">DatazoneDataSourceConfigurationSageMakerRunConfiguration</a>

---


### DatazoneDataSourceRecommendationOutputReference <a name="DatazoneDataSourceRecommendationOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceRecommendationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration">resetEnableBusinessNameGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBusinessNameGeneration` <a name="resetEnableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.resetEnableBusinessNameGeneration"></a>

```typescript
public resetEnableBusinessNameGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput">enableBusinessNameGenerationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration">enableBusinessNameGeneration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBusinessNameGenerationInput`<sup>Optional</sup> <a name="enableBusinessNameGenerationInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGenerationInput"></a>

```typescript
public readonly enableBusinessNameGenerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableBusinessNameGeneration`<sup>Required</sup> <a name="enableBusinessNameGeneration" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.enableBusinessNameGeneration"></a>

```typescript
public readonly enableBusinessNameGeneration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceRecommendation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceRecommendation">DatazoneDataSourceRecommendation</a>

---


### DatazoneDataSourceScheduleOutputReference <a name="DatazoneDataSourceScheduleOutputReference" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer"></a>

```typescript
import { datazoneDataSource } from '@cdktn/provider-awscc'

new datazoneDataSource.DatazoneDataSourceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.resetTimezone"></a>

```typescript
public resetTimezone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazoneDataSourceSchedule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneDataSource.DatazoneDataSourceSchedule">DatazoneDataSourceSchedule</a>

---



