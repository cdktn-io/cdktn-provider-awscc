# `databrewJob` Submodule <a name="`databrewJob` Submodule" id="@cdktn/provider-awscc.databrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewJob <a name="DatabrewJob" id="@cdktn/provider-awscc.databrewJob.DatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJob(scope: Construct, id: string, config: DatabrewJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig">DatabrewJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig">DatabrewJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs">putDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs">putDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample">putJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation">putOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration">putProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe">putRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations">putValidationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs">resetDatabaseOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs">resetDataCatalogOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample">resetJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription">resetLogSubscription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation">resetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration">resetProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName">resetProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe">resetRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations">resetValidationConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabaseOutputs` <a name="putDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs"></a>

```typescript
public putDatabaseOutputs(value: IResolvable | DatabrewJobDatabaseOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDatabaseOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---

##### `putDataCatalogOutputs` <a name="putDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs"></a>

```typescript
public putDataCatalogOutputs(value: IResolvable | DatabrewJobDataCatalogOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putDataCatalogOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---

##### `putJobSample` <a name="putJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample"></a>

```typescript
public putJobSample(value: DatabrewJobJobSample): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putJobSample.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `putOutputLocation` <a name="putOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation"></a>

```typescript
public putOutputLocation(value: DatabrewJobOutputLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | DatabrewJobOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---

##### `putProfileConfiguration` <a name="putProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration"></a>

```typescript
public putProfileConfiguration(value: DatabrewJobProfileConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putProfileConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `putRecipe` <a name="putRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe"></a>

```typescript
public putRecipe(value: DatabrewJobRecipe): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putRecipe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags"></a>

```typescript
public putTags(value: IResolvable | DatabrewJobTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---

##### `putValidationConfigurations` <a name="putValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations"></a>

```typescript
public putValidationConfigurations(value: IResolvable | DatabrewJobValidationConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.putValidationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---

##### `resetDatabaseOutputs` <a name="resetDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatabaseOutputs"></a>

```typescript
public resetDatabaseOutputs(): void
```

##### `resetDataCatalogOutputs` <a name="resetDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDataCatalogOutputs"></a>

```typescript
public resetDataCatalogOutputs(): void
```

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetDatasetName"></a>

```typescript
public resetDatasetName(): void
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionKeyArn"></a>

```typescript
public resetEncryptionKeyArn(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetJobSample` <a name="resetJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetJobSample"></a>

```typescript
public resetJobSample(): void
```

##### `resetLogSubscription` <a name="resetLogSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetLogSubscription"></a>

```typescript
public resetLogSubscription(): void
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxCapacity"></a>

```typescript
public resetMaxCapacity(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetOutputLocation` <a name="resetOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputLocation"></a>

```typescript
public resetOutputLocation(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetProfileConfiguration` <a name="resetProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProfileConfiguration"></a>

```typescript
public resetProfileConfiguration(): void
```

##### `resetProjectName` <a name="resetProjectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetProjectName"></a>

```typescript
public resetProjectName(): void
```

##### `resetRecipe` <a name="resetRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetRecipe"></a>

```typescript
public resetRecipe(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetValidationConfigurations` <a name="resetValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.resetValidationConfigurations"></a>

```typescript
public resetValidationConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

databrewJob.DatabrewJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

databrewJob.DatabrewJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

databrewJob.DatabrewJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

databrewJob.DatabrewJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatabrewJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabrewJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs">databaseOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations">validationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput">databaseOutputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput">dataCatalogOutputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput">datasetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput">jobSampleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput">logSubscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput">maxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput">outputLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput">profileConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput">recipeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput">validationConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription">logSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseOutputs`<sup>Required</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputs"></a>

```typescript
public readonly databaseOutputs: DatabrewJobDatabaseOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList">DatabrewJobDatabaseOutputsList</a>

---

##### `dataCatalogOutputs`<sup>Required</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputs"></a>

```typescript
public readonly dataCatalogOutputs: DatabrewJobDataCatalogOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList">DatabrewJobDataCatalogOutputsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobSample`<sup>Required</sup> <a name="jobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSample"></a>

```typescript
public readonly jobSample: DatabrewJobJobSampleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference">DatabrewJobJobSampleOutputReference</a>

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocation"></a>

```typescript
public readonly outputLocation: DatabrewJobOutputLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference">DatabrewJobOutputLocationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputs"></a>

```typescript
public readonly outputs: DatabrewJobOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList">DatabrewJobOutputsList</a>

---

##### `profileConfiguration`<sup>Required</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfiguration"></a>

```typescript
public readonly profileConfiguration: DatabrewJobProfileConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference">DatabrewJobProfileConfigurationOutputReference</a>

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipe"></a>

```typescript
public readonly recipe: DatabrewJobRecipeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference">DatabrewJobRecipeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tags"></a>

```typescript
public readonly tags: DatabrewJobTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList">DatabrewJobTagsList</a>

---

##### `validationConfigurations`<sup>Required</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurations"></a>

```typescript
public readonly validationConfigurations: DatabrewJobValidationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList">DatabrewJobValidationConfigurationsList</a>

---

##### `databaseOutputsInput`<sup>Optional</sup> <a name="databaseOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.databaseOutputsInput"></a>

```typescript
public readonly databaseOutputsInput: IResolvable | DatabrewJobDatabaseOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---

##### `dataCatalogOutputsInput`<sup>Optional</sup> <a name="dataCatalogOutputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.dataCatalogOutputsInput"></a>

```typescript
public readonly dataCatalogOutputsInput: IResolvable | DatabrewJobDataCatalogOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetNameInput"></a>

```typescript
public readonly datasetNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArnInput"></a>

```typescript
public readonly encryptionKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `jobSampleInput`<sup>Optional</sup> <a name="jobSampleInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.jobSampleInput"></a>

```typescript
public readonly jobSampleInput: IResolvable | DatabrewJobJobSample;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---

##### `logSubscriptionInput`<sup>Optional</sup> <a name="logSubscriptionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscriptionInput"></a>

```typescript
public readonly logSubscriptionInput: string;
```

- *Type:* string

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacityInput"></a>

```typescript
public readonly maxCapacityInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputLocationInput`<sup>Optional</sup> <a name="outputLocationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputLocationInput"></a>

```typescript
public readonly outputLocationInput: IResolvable | DatabrewJobOutputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | DatabrewJobOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---

##### `profileConfigurationInput`<sup>Optional</sup> <a name="profileConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.profileConfigurationInput"></a>

```typescript
public readonly profileConfigurationInput: IResolvable | DatabrewJobProfileConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `recipeInput`<sup>Optional</sup> <a name="recipeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.recipeInput"></a>

```typescript
public readonly recipeInput: IResolvable | DatabrewJobRecipe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatabrewJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validationConfigurationsInput`<sup>Optional</sup> <a name="validationConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.validationConfigurationsInput"></a>

```typescript
public readonly validationConfigurationsInput: IResolvable | DatabrewJobValidationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `logSubscription`<sup>Required</sup> <a name="logSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.logSubscription"></a>

```typescript
public readonly logSubscription: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewJob.DatabrewJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewJobConfig <a name="DatabrewJobConfig" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobConfig: databrewJob.DatabrewJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name">name</a></code> | <code>string</code> | Job name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Role arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type">type</a></code> | <code>string</code> | Job type. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs">databaseOutputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName">datasetName</a></code> | <code>string</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | Encryption Key Arn. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Encryption mode. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | Job Sample. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription">logSubscription</a></code> | <code>string</code> | Log subscription. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | Max capacity. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Max retries. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | Profile Job configuration. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName">projectName</a></code> | <code>string</code> | Project name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#tags DatabrewJob#tags}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout">timeout</a></code> | <code>number</code> | Timeout. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations">validationConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | Data quality rules configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Job name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Role arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#role_arn DatabrewJob#role_arn}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Job type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#type DatabrewJob#type}

---

##### `databaseOutputs`<sup>Optional</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.databaseOutputs"></a>

```typescript
public readonly databaseOutputs: IResolvable | DatabrewJobDatabaseOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_outputs DatabrewJob#database_outputs}.

---

##### `dataCatalogOutputs`<sup>Optional</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.dataCatalogOutputs"></a>

```typescript
public readonly dataCatalogOutputs: IResolvable | DatabrewJobDataCatalogOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#data_catalog_outputs DatabrewJob#data_catalog_outputs}.

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#dataset_name DatabrewJob#dataset_name}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

Encryption Key Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#encryption_key_arn DatabrewJob#encryption_key_arn}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Encryption mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#encryption_mode DatabrewJob#encryption_mode}

---

##### `jobSample`<sup>Optional</sup> <a name="jobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.jobSample"></a>

```typescript
public readonly jobSample: DatabrewJobJobSample;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

Job Sample.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#job_sample DatabrewJob#job_sample}

---

##### `logSubscription`<sup>Optional</sup> <a name="logSubscription" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.logSubscription"></a>

```typescript
public readonly logSubscription: string;
```

- *Type:* string

Log subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#log_subscription DatabrewJob#log_subscription}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

Max capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#max_capacity DatabrewJob#max_capacity}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Max retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#max_retries DatabrewJob#max_retries}

---

##### `outputLocation`<sup>Optional</sup> <a name="outputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputLocation"></a>

```typescript
public readonly outputLocation: DatabrewJobOutputLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#output_location DatabrewJob#output_location}

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | DatabrewJobOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#outputs DatabrewJob#outputs}.

---

##### `profileConfiguration`<sup>Optional</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.profileConfiguration"></a>

```typescript
public readonly profileConfiguration: DatabrewJobProfileConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

Profile Job configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#profile_configuration DatabrewJob#profile_configuration}

---

##### `projectName`<sup>Optional</sup> <a name="projectName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Project name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#project_name DatabrewJob#project_name}

---

##### `recipe`<sup>Optional</sup> <a name="recipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.recipe"></a>

```typescript
public readonly recipe: DatabrewJobRecipe;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#recipe DatabrewJob#recipe}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatabrewJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#tags DatabrewJob#tags}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#timeout DatabrewJob#timeout}

---

##### `validationConfigurations`<sup>Optional</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobConfig.property.validationConfigurations"></a>

```typescript
public readonly validationConfigurations: IResolvable | DatabrewJobValidationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

Data quality rules configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#validation_configurations DatabrewJob#validation_configurations}

---

### DatabrewJobDatabaseOutputs <a name="DatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDatabaseOutputs: databrewJob.DatabrewJobDatabaseOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode">databaseOutputMode</a></code> | <code>string</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | Glue connection name. |

---

##### `databaseOptions`<sup>Optional</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DatabrewJobDatabaseOutputsDatabaseOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `databaseOutputMode`<sup>Optional</sup> <a name="databaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.databaseOutputMode"></a>

```typescript
public readonly databaseOutputMode: string;
```

- *Type:* string

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_output_mode DatabrewJob#database_output_mode}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#glue_connection_name DatabrewJob#glue_connection_name}

---

### DatabrewJobDatabaseOutputsDatabaseOptions <a name="DatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDatabaseOutputsDatabaseOptions: databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDatabaseOutputsDatabaseOptionsTempDirectory: databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputs <a name="DatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDataCatalogOutputs: databrewJob.DatabrewJobDataCatalogOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite">overwrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options">s3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#catalog_id DatabrewJob#catalog_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_name DatabrewJob#database_name}.

---

##### `databaseOptions`<sup>Optional</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DatabrewJobDataCatalogOutputsDatabaseOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#database_options DatabrewJob#database_options}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.overwrite"></a>

```typescript
public readonly overwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `s3Options`<sup>Optional</sup> <a name="s3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.s3Options"></a>

```typescript
public readonly s3Options: DatabrewJobDataCatalogOutputsS3Options;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#s3_options DatabrewJob#s3_options}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

### DatabrewJobDataCatalogOutputsDatabaseOptions <a name="DatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDataCatalogOutputsDatabaseOptions: databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | S3 Output location. |

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#table_name DatabrewJob#table_name}.

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#temp_directory DatabrewJob#temp_directory}

---

### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDataCatalogOutputsDatabaseOptionsTempDirectory: databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobDataCatalogOutputsS3Options <a name="DatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDataCatalogOutputsS3Options: databrewJob.DatabrewJobDataCatalogOutputsS3Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | S3 Output location. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options.property.location"></a>

```typescript
public readonly location: DatabrewJobDataCatalogOutputsS3OptionsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#location DatabrewJob#location}

---

### DatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobDataCatalogOutputsS3OptionsLocation: databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobJobSample <a name="DatabrewJobJobSample" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobJobSample: databrewJob.DatabrewJobJobSample = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode">mode</a></code> | <code>string</code> | Sample configuration mode for profile jobs. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size">size</a></code> | <code>number</code> | Sample configuration size for profile jobs. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Sample configuration mode for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#mode DatabrewJob#mode}

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Sample configuration size for profile jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#size DatabrewJob#size}

---

### DatabrewJobOutputLocation <a name="DatabrewJobOutputLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobOutputLocation: databrewJob.DatabrewJobOutputLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobOutputs <a name="DatabrewJobOutputs" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobOutputs: databrewJob.DatabrewJobOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat">compressionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#format DatabrewJob#format}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | Format options for job Output. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | S3 Output location. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles">maxOutputFiles</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite">overwrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns">partitionColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}. |

---

##### `compressionFormat`<sup>Optional</sup> <a name="compressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.compressionFormat"></a>

```typescript
public readonly compressionFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#compression_format DatabrewJob#compression_format}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#format DatabrewJob#format}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.formatOptions"></a>

```typescript
public readonly formatOptions: DatabrewJobOutputsFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

Format options for job Output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#format_options DatabrewJob#format_options}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.location"></a>

```typescript
public readonly location: DatabrewJobOutputsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

S3 Output location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#location DatabrewJob#location}

---

##### `maxOutputFiles`<sup>Optional</sup> <a name="maxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.maxOutputFiles"></a>

```typescript
public readonly maxOutputFiles: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#max_output_files DatabrewJob#max_output_files}.

---

##### `overwrite`<sup>Optional</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.overwrite"></a>

```typescript
public readonly overwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overwrite DatabrewJob#overwrite}.

---

##### `partitionColumns`<sup>Optional</sup> <a name="partitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs.property.partitionColumns"></a>

```typescript
public readonly partitionColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#partition_columns DatabrewJob#partition_columns}.

---

### DatabrewJobOutputsFormatOptions <a name="DatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobOutputsFormatOptions: databrewJob.DatabrewJobOutputsFormatOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | Output Csv options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions.property.csv"></a>

```typescript
public readonly csv: DatabrewJobOutputsFormatOptionsCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

Output Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#csv DatabrewJob#csv}

---

### DatabrewJobOutputsFormatOptionsCsv <a name="DatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobOutputsFormatOptionsCsv: databrewJob.DatabrewJobOutputsFormatOptionsCsv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#delimiter DatabrewJob#delimiter}.

---

### DatabrewJobOutputsLocation <a name="DatabrewJobOutputsLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobOutputsLocation: databrewJob.DatabrewJobOutputsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket DatabrewJob#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#bucket_owner DatabrewJob#bucket_owner}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

### DatabrewJobProfileConfiguration <a name="DatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfiguration: databrewJob.DatabrewJobProfileConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations">columnStatisticsConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration">datasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration">entityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns">profileColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}. |

---

##### `columnStatisticsConfigurations`<sup>Optional</sup> <a name="columnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.columnStatisticsConfigurations"></a>

```typescript
public readonly columnStatisticsConfigurations: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#column_statistics_configurations DatabrewJob#column_statistics_configurations}.

---

##### `datasetStatisticsConfiguration`<sup>Optional</sup> <a name="datasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.datasetStatisticsConfiguration"></a>

```typescript
public readonly datasetStatisticsConfiguration: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#dataset_statistics_configuration DatabrewJob#dataset_statistics_configuration}.

---

##### `entityDetectorConfiguration`<sup>Optional</sup> <a name="entityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.entityDetectorConfiguration"></a>

```typescript
public readonly entityDetectorConfiguration: DatabrewJobProfileConfigurationEntityDetectorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#entity_detector_configuration DatabrewJob#entity_detector_configuration}.

---

##### `profileColumns`<sup>Optional</sup> <a name="profileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration.property.profileColumns"></a>

```typescript
public readonly profileColumns: IResolvable | DatabrewJobProfileConfigurationProfileColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#profile_columns DatabrewJob#profile_columns}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationColumnStatisticsConfigurations: databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors">selectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `selectors`<sup>Optional</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.selectors"></a>

```typescript
public readonly selectors: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#selectors DatabrewJob#selectors}.

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations.property.statistics"></a>

```typescript
public readonly statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors: databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics: databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides">overrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `includedStatistics`<sup>Optional</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides: databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationDatasetStatisticsConfiguration: databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides">overrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}. |

---

##### `includedStatistics`<sup>Optional</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#included_statistics DatabrewJob#included_statistics}.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration.property.overrides"></a>

```typescript
public readonly overrides: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#overrides DatabrewJob#overrides}.

---

### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides: databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic">statistic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#parameters DatabrewJob#parameters}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistic DatabrewJob#statistic}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationEntityDetectorConfiguration: databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics">allowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes">entityTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}. |

---

##### `allowedStatistics`<sup>Optional</sup> <a name="allowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.allowedStatistics"></a>

```typescript
public readonly allowedStatistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#allowed_statistics DatabrewJob#allowed_statistics}.

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration.property.entityTypes"></a>

```typescript
public readonly entityTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#entity_types DatabrewJob#entity_types}.

---

### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics: databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics">statistics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}. |

---

##### `statistics`<sup>Optional</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#statistics DatabrewJob#statistics}.

---

### DatabrewJobProfileConfigurationProfileColumns <a name="DatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobProfileConfigurationProfileColumns: databrewJob.DatabrewJobProfileConfigurationProfileColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#regex DatabrewJob#regex}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#regex DatabrewJob#regex}.

---

### DatabrewJobRecipe <a name="DatabrewJobRecipe" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobRecipe: databrewJob.DatabrewJobRecipe = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name">name</a></code> | <code>string</code> | Recipe name. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version">version</a></code> | <code>string</code> | Recipe version. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#name DatabrewJob#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#version DatabrewJob#version}

---

### DatabrewJobTags <a name="DatabrewJobTags" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobTags: databrewJob.DatabrewJobTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#value DatabrewJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#key DatabrewJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#value DatabrewJob#value}.

---

### DatabrewJobValidationConfigurations <a name="DatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

const databrewJobValidationConfigurations: databrewJob.DatabrewJobValidationConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn">rulesetArn</a></code> | <code>string</code> | Arn of the Ruleset. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode">validationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}. |

---

##### `rulesetArn`<sup>Optional</sup> <a name="rulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.rulesetArn"></a>

```typescript
public readonly rulesetArn: string;
```

- *Type:* string

Arn of the Ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#ruleset_arn DatabrewJob#ruleset_arn}

---

##### `validationMode`<sup>Optional</sup> <a name="validationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations.property.validationMode"></a>

```typescript
public readonly validationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/databrew_job#validation_mode DatabrewJob#validation_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```typescript
public putTempDirectory(value: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```typescript
public resetTempDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```typescript
public readonly tempDirectoryInput: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDatabaseOutputsList <a name="DatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDatabaseOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get"></a>

```typescript
public get(index: number): DatabrewJobDatabaseOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDatabaseOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>[]

---


### DatabrewJobDatabaseOutputsOutputReference <a name="DatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDatabaseOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions">putDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions">resetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode">resetDatabaseOutputMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseOptions` <a name="putDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions"></a>

```typescript
public putDatabaseOptions(value: DatabrewJobDatabaseOutputsDatabaseOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `resetDatabaseOptions` <a name="resetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOptions"></a>

```typescript
public resetDatabaseOptions(): void
```

##### `resetDatabaseOutputMode` <a name="resetDatabaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetDatabaseOutputMode"></a>

```typescript
public resetDatabaseOutputMode(): void
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.resetGlueConnectionName"></a>

```typescript
public resetGlueConnectionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput">databaseOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput">databaseOutputModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">databaseOutputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `databaseOptionsInput`<sup>Optional</sup> <a name="databaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOptionsInput"></a>

```typescript
public readonly databaseOptionsInput: IResolvable | DatabrewJobDatabaseOutputsDatabaseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsDatabaseOptions">DatabrewJobDatabaseOutputsDatabaseOptions</a>

---

##### `databaseOutputModeInput`<sup>Optional</sup> <a name="databaseOutputModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputModeInput"></a>

```typescript
public readonly databaseOutputModeInput: string;
```

- *Type:* string

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionNameInput"></a>

```typescript
public readonly glueConnectionNameInput: string;
```

- *Type:* string

---

##### `databaseOutputMode`<sup>Required</sup> <a name="databaseOutputMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```typescript
public readonly databaseOutputMode: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDatabaseOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDatabaseOutputs">DatabrewJobDatabaseOutputs</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory"></a>

```typescript
public putTempDirectory(value: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resetTempDirectory"></a>

```typescript
public resetTempDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectoryInput"></a>

```typescript
public readonly tempDirectoryInput: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DatabrewJobDataCatalogOutputsList <a name="DatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get"></a>

```typescript
public get(index: number): DatabrewJobDataCatalogOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>[]

---


### DatabrewJobDataCatalogOutputsOutputReference <a name="DatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions">putDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options">putS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions">resetDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite">resetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options">resetS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseOptions` <a name="putDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions"></a>

```typescript
public putDatabaseOptions(value: DatabrewJobDataCatalogOutputsDatabaseOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putDatabaseOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `putS3Options` <a name="putS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options"></a>

```typescript
public putS3Options(value: DatabrewJobDataCatalogOutputsS3Options): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.putS3Options.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDatabaseOptions` <a name="resetDatabaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetDatabaseOptions"></a>

```typescript
public resetDatabaseOptions(): void
```

##### `resetOverwrite` <a name="resetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetOverwrite"></a>

```typescript
public resetOverwrite(): void
```

##### `resetS3Options` <a name="resetS3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetS3Options"></a>

```typescript
public resetS3Options(): void
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options">s3Options</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput">databaseOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput">overwriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput">s3OptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `s3Options`<sup>Required</sup> <a name="s3Options" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```typescript
public readonly s3Options: DatabrewJobDataCatalogOutputsS3OptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference">DatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `databaseOptionsInput`<sup>Optional</sup> <a name="databaseOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseOptionsInput"></a>

```typescript
public readonly databaseOptionsInput: IResolvable | DatabrewJobDataCatalogOutputsDatabaseOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsDatabaseOptions">DatabrewJobDataCatalogOutputsDatabaseOptions</a>

---

##### `overwriteInput`<sup>Optional</sup> <a name="overwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwriteInput"></a>

```typescript
public readonly overwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3OptionsInput`<sup>Optional</sup> <a name="s3OptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.s3OptionsInput"></a>

```typescript
public readonly s3OptionsInput: IResolvable | DatabrewJobDataCatalogOutputsS3Options;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```typescript
public readonly overwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputs">DatabrewJobDataCatalogOutputs</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputsS3OptionsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation"></a>

```typescript
public putLocation(value: DatabrewJobDataCatalogOutputsS3OptionsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```typescript
public readonly location: DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | DatabrewJobDataCatalogOutputsS3OptionsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsLocation">DatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobDataCatalogOutputsS3Options;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobDataCatalogOutputsS3Options">DatabrewJobDataCatalogOutputsS3Options</a>

---


### DatabrewJobJobSampleOutputReference <a name="DatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobJobSampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize">resetSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSize` <a name="resetSize" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.resetSize"></a>

```typescript
public resetSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobJobSampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobJobSample;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobJobSample">DatabrewJobJobSample</a>

---


### DatabrewJobOutputLocationOutputReference <a name="DatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputLocation">DatabrewJobOutputLocation</a>

---


### DatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.resetDelimiter"></a>

```typescript
public resetDelimiter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```typescript
public readonly delimiterInput: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputsFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---


### DatabrewJobOutputsFormatOptionsOutputReference <a name="DatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputsFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv"></a>

```typescript
public putCsv(value: DatabrewJobOutputsFormatOptionsCsv): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.resetCsv"></a>

```typescript
public resetCsv(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```typescript
public readonly csv: DatabrewJobOutputsFormatOptionsCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsvOutputReference">DatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.csvInput"></a>

```typescript
public readonly csvInput: IResolvable | DatabrewJobOutputsFormatOptionsCsv;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsCsv">DatabrewJobOutputsFormatOptionsCsv</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputsFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---


### DatabrewJobOutputsList <a name="DatabrewJobOutputsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get"></a>

```typescript
public get(index: number): DatabrewJobOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>[]

---


### DatabrewJobOutputsLocationOutputReference <a name="DatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetBucketOwner"></a>

```typescript
public resetBucketOwner(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwnerInput"></a>

```typescript
public readonly bucketOwnerInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---


### DatabrewJobOutputsOutputReference <a name="DatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat">resetCompressionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles">resetMaxOutputFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite">resetOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns">resetPartitionColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions"></a>

```typescript
public putFormatOptions(value: DatabrewJobOutputsFormatOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation"></a>

```typescript
public putLocation(value: DatabrewJobOutputsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `resetCompressionFormat` <a name="resetCompressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetCompressionFormat"></a>

```typescript
public resetCompressionFormat(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaxOutputFiles` <a name="resetMaxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetMaxOutputFiles"></a>

```typescript
public resetMaxOutputFiles(): void
```

##### `resetOverwrite` <a name="resetOverwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetOverwrite"></a>

```typescript
public resetOverwrite(): void
```

##### `resetPartitionColumns` <a name="resetPartitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.resetPartitionColumns"></a>

```typescript
public resetPartitionColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput">compressionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput">maxOutputFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput">overwriteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput">partitionColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat">compressionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles">maxOutputFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns">partitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: DatabrewJobOutputsFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptionsOutputReference">DatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.location"></a>

```typescript
public readonly location: DatabrewJobOutputsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocationOutputReference">DatabrewJobOutputsLocationOutputReference</a>

---

##### `compressionFormatInput`<sup>Optional</sup> <a name="compressionFormatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormatInput"></a>

```typescript
public readonly compressionFormatInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: IResolvable | DatabrewJobOutputsFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsFormatOptions">DatabrewJobOutputsFormatOptions</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | DatabrewJobOutputsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsLocation">DatabrewJobOutputsLocation</a>

---

##### `maxOutputFilesInput`<sup>Optional</sup> <a name="maxOutputFilesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFilesInput"></a>

```typescript
public readonly maxOutputFilesInput: number;
```

- *Type:* number

---

##### `overwriteInput`<sup>Optional</sup> <a name="overwriteInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwriteInput"></a>

```typescript
public readonly overwriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionColumnsInput`<sup>Optional</sup> <a name="partitionColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumnsInput"></a>

```typescript
public readonly partitionColumnsInput: string[];
```

- *Type:* string[]

---

##### `compressionFormat`<sup>Required</sup> <a name="compressionFormat" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```typescript
public readonly compressionFormat: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `maxOutputFiles`<sup>Required</sup> <a name="maxOutputFiles" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```typescript
public readonly maxOutputFiles: number;
```

- *Type:* number

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.overwrite"></a>

```typescript
public readonly overwrite: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionColumns`<sup>Required</sup> <a name="partitionColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```typescript
public readonly partitionColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobOutputs">DatabrewJobOutputs</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```typescript
public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors">putSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics">putStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors">resetSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics">resetStatistics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelectors` <a name="putSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors"></a>

```typescript
public putSelectors(value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putSelectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---

##### `putStatistics` <a name="putStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics"></a>

```typescript
public putStatistics(value: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.putStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `resetSelectors` <a name="resetSelectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetSelectors"></a>

```typescript
public resetSelectors(): void
```

##### `resetStatistics` <a name="resetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resetStatistics"></a>

```typescript
public resetStatistics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput">selectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```typescript
public readonly selectors: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `selectorsInput`<sup>Optional</sup> <a name="selectorsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectorsInput"></a>

```typescript
public readonly selectorsInput: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```typescript
public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics">resetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---

##### `resetIncludedStatistics` <a name="resetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetIncludedStatistics"></a>

```typescript
public resetIncludedStatistics(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput">includedStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `includedStatisticsInput`<sup>Optional</sup> <a name="includedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatisticsInput"></a>

```typescript
public readonly includedStatisticsInput: string[];
```

- *Type:* string[]

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```typescript
public get(index: number): DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>[]

---


### DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides">putOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics">resetIncludedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides">resetOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrides` <a name="putOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides"></a>

```typescript
public putOverrides(value: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.putOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---

##### `resetIncludedStatistics` <a name="resetIncludedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetIncludedStatistics"></a>

```typescript
public resetIncludedStatistics(): void
```

##### `resetOverrides` <a name="resetOverrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resetOverrides"></a>

```typescript
public resetOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput">includedStatisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput">overridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `includedStatisticsInput`<sup>Optional</sup> <a name="includedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatisticsInput"></a>

```typescript
public readonly includedStatisticsInput: string[];
```

- *Type:* string[]

---

##### `overridesInput`<sup>Optional</sup> <a name="overridesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overridesInput"></a>

```typescript
public readonly overridesInput: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```typescript
public get(index: number): DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>[]

---


### DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics">resetStatistics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatistics` <a name="resetStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resetStatistics"></a>

```typescript
public resetStatistics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput">statisticsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statisticsInput`<sup>Optional</sup> <a name="statisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statisticsInput"></a>

```typescript
public readonly statisticsInput: string[];
```

- *Type:* string[]

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics">putAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics">resetAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedStatistics` <a name="putAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics"></a>

```typescript
public putAllowedStatistics(value: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.putAllowedStatistics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `resetAllowedStatistics` <a name="resetAllowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetAllowedStatistics"></a>

```typescript
public resetAllowedStatistics(): void
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resetEntityTypes"></a>

```typescript
public resetEntityTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">allowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput">allowedStatisticsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">entityTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedStatistics`<sup>Required</sup> <a name="allowedStatistics" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```typescript
public readonly allowedStatistics: DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `allowedStatisticsInput`<sup>Optional</sup> <a name="allowedStatisticsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatisticsInput"></a>

```typescript
public readonly allowedStatisticsInput: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypesInput"></a>

```typescript
public readonly entityTypesInput: string[];
```

- *Type:* string[]

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DatabrewJobProfileConfigurationOutputReference <a name="DatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations">putColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration">putDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration">putEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns">putProfileColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations">resetColumnStatisticsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration">resetDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration">resetEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns">resetProfileColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnStatisticsConfigurations` <a name="putColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations"></a>

```typescript
public putColumnStatisticsConfigurations(value: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putColumnStatisticsConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---

##### `putDatasetStatisticsConfiguration` <a name="putDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration"></a>

```typescript
public putDatasetStatisticsConfiguration(value: DatabrewJobProfileConfigurationDatasetStatisticsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putDatasetStatisticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `putEntityDetectorConfiguration` <a name="putEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration"></a>

```typescript
public putEntityDetectorConfiguration(value: DatabrewJobProfileConfigurationEntityDetectorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putEntityDetectorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `putProfileColumns` <a name="putProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns"></a>

```typescript
public putProfileColumns(value: IResolvable | DatabrewJobProfileConfigurationProfileColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.putProfileColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---

##### `resetColumnStatisticsConfigurations` <a name="resetColumnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetColumnStatisticsConfigurations"></a>

```typescript
public resetColumnStatisticsConfigurations(): void
```

##### `resetDatasetStatisticsConfiguration` <a name="resetDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetDatasetStatisticsConfiguration"></a>

```typescript
public resetDatasetStatisticsConfiguration(): void
```

##### `resetEntityDetectorConfiguration` <a name="resetEntityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetEntityDetectorConfiguration"></a>

```typescript
public resetEntityDetectorConfiguration(): void
```

##### `resetProfileColumns` <a name="resetProfileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.resetProfileColumns"></a>

```typescript
public resetProfileColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">columnStatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">datasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">entityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns">profileColumns</a></code> | <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput">columnStatisticsConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput">datasetStatisticsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput">entityDetectorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput">profileColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnStatisticsConfigurations`<sup>Required</sup> <a name="columnStatisticsConfigurations" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```typescript
public readonly columnStatisticsConfigurations: DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `datasetStatisticsConfiguration`<sup>Required</sup> <a name="datasetStatisticsConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```typescript
public readonly datasetStatisticsConfiguration: DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `entityDetectorConfiguration`<sup>Required</sup> <a name="entityDetectorConfiguration" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```typescript
public readonly entityDetectorConfiguration: DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `profileColumns`<sup>Required</sup> <a name="profileColumns" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```typescript
public readonly profileColumns: DatabrewJobProfileConfigurationProfileColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList">DatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `columnStatisticsConfigurationsInput`<sup>Optional</sup> <a name="columnStatisticsConfigurationsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurationsInput"></a>

```typescript
public readonly columnStatisticsConfigurationsInput: IResolvable | DatabrewJobProfileConfigurationColumnStatisticsConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationColumnStatisticsConfigurations">DatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>[]

---

##### `datasetStatisticsConfigurationInput`<sup>Optional</sup> <a name="datasetStatisticsConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfigurationInput"></a>

```typescript
public readonly datasetStatisticsConfigurationInput: IResolvable | DatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---

##### `entityDetectorConfigurationInput`<sup>Optional</sup> <a name="entityDetectorConfigurationInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfigurationInput"></a>

```typescript
public readonly entityDetectorConfigurationInput: IResolvable | DatabrewJobProfileConfigurationEntityDetectorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationEntityDetectorConfiguration">DatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---

##### `profileColumnsInput`<sup>Optional</sup> <a name="profileColumnsInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.profileColumnsInput"></a>

```typescript
public readonly profileColumnsInput: IResolvable | DatabrewJobProfileConfigurationProfileColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfiguration">DatabrewJobProfileConfiguration</a>

---


### DatabrewJobProfileConfigurationProfileColumnsList <a name="DatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationProfileColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```typescript
public get(index: number): DatabrewJobProfileConfigurationProfileColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationProfileColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>[]

---


### DatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobProfileConfigurationProfileColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobProfileConfigurationProfileColumns">DatabrewJobProfileConfigurationProfileColumns</a>

---


### DatabrewJobRecipeOutputReference <a name="DatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobRecipeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobRecipeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobRecipe;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobRecipe">DatabrewJobRecipe</a>

---


### DatabrewJobTagsList <a name="DatabrewJobTagsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get"></a>

```typescript
public get(index: number): DatabrewJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>[]

---


### DatabrewJobTagsOutputReference <a name="DatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobTags">DatabrewJobTags</a>

---


### DatabrewJobValidationConfigurationsList <a name="DatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobValidationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get"></a>

```typescript
public get(index: number): DatabrewJobValidationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobValidationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>[]

---


### DatabrewJobValidationConfigurationsOutputReference <a name="DatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```typescript
import { databrewJob } from '@cdktn/provider-awscc'

new databrewJob.DatabrewJobValidationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn">resetRulesetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode">resetValidationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRulesetArn` <a name="resetRulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetRulesetArn"></a>

```typescript
public resetRulesetArn(): void
```

##### `resetValidationMode` <a name="resetValidationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.resetValidationMode"></a>

```typescript
public resetValidationMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput">rulesetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput">validationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">rulesetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode">validationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rulesetArnInput`<sup>Optional</sup> <a name="rulesetArnInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArnInput"></a>

```typescript
public readonly rulesetArnInput: string;
```

- *Type:* string

---

##### `validationModeInput`<sup>Optional</sup> <a name="validationModeInput" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationModeInput"></a>

```typescript
public readonly validationModeInput: string;
```

- *Type:* string

---

##### `rulesetArn`<sup>Required</sup> <a name="rulesetArn" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```typescript
public readonly rulesetArn: string;
```

- *Type:* string

---

##### `validationMode`<sup>Required</sup> <a name="validationMode" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```typescript
public readonly validationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabrewJobValidationConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.databrewJob.DatabrewJobValidationConfigurations">DatabrewJobValidationConfigurations</a>

---



