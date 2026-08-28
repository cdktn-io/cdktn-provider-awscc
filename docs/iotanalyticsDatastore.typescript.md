# `iotanalyticsDatastore` Submodule <a name="`iotanalyticsDatastore` Submodule" id="@cdktn/provider-awscc.iotanalyticsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotanalyticsDatastore <a name="IotanalyticsDatastore" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore awscc_iotanalytics_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastore(scope: Construct, id: string, config?: IotanalyticsDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig">IotanalyticsDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig">IotanalyticsDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions">putDatastorePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage">putDatastoreStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration">putFileFormatConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod">putRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreName">resetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastorePartitions">resetDatastorePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreStorage">resetDatastoreStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetFileFormatConfiguration">resetFileFormatConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetRetentionPeriod">resetRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatastorePartitions` <a name="putDatastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions"></a>

```typescript
public putDatastorePartitions(value: IotanalyticsDatastoreDatastorePartitions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastorePartitions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

---

##### `putDatastoreStorage` <a name="putDatastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage"></a>

```typescript
public putDatastoreStorage(value: IotanalyticsDatastoreDatastoreStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putDatastoreStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

---

##### `putFileFormatConfiguration` <a name="putFileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration"></a>

```typescript
public putFileFormatConfiguration(value: IotanalyticsDatastoreFileFormatConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putFileFormatConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

---

##### `putRetentionPeriod` <a name="putRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod"></a>

```typescript
public putRetentionPeriod(value: IotanalyticsDatastoreRetentionPeriod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putRetentionPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags"></a>

```typescript
public putTags(value: IResolvable | IotanalyticsDatastoreTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]

---

##### `resetDatastoreName` <a name="resetDatastoreName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreName"></a>

```typescript
public resetDatastoreName(): void
```

##### `resetDatastorePartitions` <a name="resetDatastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastorePartitions"></a>

```typescript
public resetDatastorePartitions(): void
```

##### `resetDatastoreStorage` <a name="resetDatastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetDatastoreStorage"></a>

```typescript
public resetDatastoreStorage(): void
```

##### `resetFileFormatConfiguration` <a name="resetFileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetFileFormatConfiguration"></a>

```typescript
public resetFileFormatConfiguration(): void
```

##### `resetRetentionPeriod` <a name="resetRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetRetentionPeriod"></a>

```typescript
public resetRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotanalyticsDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

iotanalyticsDatastore.IotanalyticsDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotanalyticsDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotanalyticsDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotanalyticsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotanalyticsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitions">datastorePartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference">IotanalyticsDatastoreDatastorePartitionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorage">datastoreStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference">IotanalyticsDatastoreDatastoreStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfiguration">fileFormatConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference">IotanalyticsDatastoreRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList">IotanalyticsDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreNameInput">datastoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitionsInput">datastorePartitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorageInput">datastoreStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfigurationInput">fileFormatConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreName">datastoreName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `datastorePartitions`<sup>Required</sup> <a name="datastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitions"></a>

```typescript
public readonly datastorePartitions: IotanalyticsDatastoreDatastorePartitionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference">IotanalyticsDatastoreDatastorePartitionsOutputReference</a>

---

##### `datastoreStorage`<sup>Required</sup> <a name="datastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorage"></a>

```typescript
public readonly datastoreStorage: IotanalyticsDatastoreDatastoreStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference">IotanalyticsDatastoreDatastoreStorageOutputReference</a>

---

##### `fileFormatConfiguration`<sup>Required</sup> <a name="fileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfiguration"></a>

```typescript
public readonly fileFormatConfiguration: IotanalyticsDatastoreFileFormatConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: IotanalyticsDatastoreRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference">IotanalyticsDatastoreRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tags"></a>

```typescript
public readonly tags: IotanalyticsDatastoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList">IotanalyticsDatastoreTagsList</a>

---

##### `datastoreNameInput`<sup>Optional</sup> <a name="datastoreNameInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreNameInput"></a>

```typescript
public readonly datastoreNameInput: string;
```

- *Type:* string

---

##### `datastorePartitionsInput`<sup>Optional</sup> <a name="datastorePartitionsInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastorePartitionsInput"></a>

```typescript
public readonly datastorePartitionsInput: IResolvable | IotanalyticsDatastoreDatastorePartitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

---

##### `datastoreStorageInput`<sup>Optional</sup> <a name="datastoreStorageInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreStorageInput"></a>

```typescript
public readonly datastoreStorageInput: IResolvable | IotanalyticsDatastoreDatastoreStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

---

##### `fileFormatConfigurationInput`<sup>Optional</sup> <a name="fileFormatConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.fileFormatConfigurationInput"></a>

```typescript
public readonly fileFormatConfigurationInput: IResolvable | IotanalyticsDatastoreFileFormatConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: IResolvable | IotanalyticsDatastoreRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotanalyticsDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotanalyticsDatastoreConfig <a name="IotanalyticsDatastoreConfig" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreConfig: iotanalyticsDatastore.IotanalyticsDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreName">datastoreName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastorePartitions">datastorePartitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreStorage">datastoreStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.fileFormatConfiguration">fileFormatConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_name IotanalyticsDatastore#datastore_name}.

---

##### `datastorePartitions`<sup>Optional</sup> <a name="datastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastorePartitions"></a>

```typescript
public readonly datastorePartitions: IotanalyticsDatastoreDatastorePartitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_partitions IotanalyticsDatastore#datastore_partitions}.

---

##### `datastoreStorage`<sup>Optional</sup> <a name="datastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.datastoreStorage"></a>

```typescript
public readonly datastoreStorage: IotanalyticsDatastoreDatastoreStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#datastore_storage IotanalyticsDatastore#datastore_storage}.

---

##### `fileFormatConfiguration`<sup>Optional</sup> <a name="fileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.fileFormatConfiguration"></a>

```typescript
public readonly fileFormatConfiguration: IotanalyticsDatastoreFileFormatConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#file_format_configuration IotanalyticsDatastore#file_format_configuration}.

---

##### `retentionPeriod`<sup>Optional</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: IotanalyticsDatastoreRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#retention_period IotanalyticsDatastore#retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotanalyticsDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#tags IotanalyticsDatastore#tags}.

---

### IotanalyticsDatastoreDatastorePartitions <a name="IotanalyticsDatastoreDatastorePartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastorePartitions: iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.property.partitions">partitions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}. |

---

##### `partitions`<sup>Optional</sup> <a name="partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions.property.partitions"></a>

```typescript
public readonly partitions: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#partitions IotanalyticsDatastore#partitions}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitions <a name="IotanalyticsDatastoreDatastorePartitionsPartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastorePartitionsPartitions: iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.partition">partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#partition IotanalyticsDatastore#partition}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.timestampPartition">timestampPartition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#timestamp_partition IotanalyticsDatastore#timestamp_partition}. |

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.partition"></a>

```typescript
public readonly partition: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#partition IotanalyticsDatastore#partition}.

---

##### `timestampPartition`<sup>Optional</sup> <a name="timestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions.property.timestampPartition"></a>

```typescript
public readonly timestampPartition: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#timestamp_partition IotanalyticsDatastore#timestamp_partition}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitionsPartition <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastorePartitionsPartitionsPartition: iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.property.attributeName">attributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

### IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition: iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.attributeName">attributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}. |

---

##### `attributeName`<sup>Optional</sup> <a name="attributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#attribute_name IotanalyticsDatastore#attribute_name}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#timestamp_format IotanalyticsDatastore#timestamp_format}.

---

### IotanalyticsDatastoreDatastoreStorage <a name="IotanalyticsDatastoreDatastoreStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastoreStorage: iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.iotSiteWiseMultiLayerStorage">iotSiteWiseMultiLayerStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}. |

---

##### `customerManagedS3`<sup>Optional</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#customer_managed_s3 IotanalyticsDatastore#customer_managed_s3}.

---

##### `iotSiteWiseMultiLayerStorage`<sup>Optional</sup> <a name="iotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.iotSiteWiseMultiLayerStorage"></a>

```typescript
public readonly iotSiteWiseMultiLayerStorage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#iot_site_wise_multi_layer_storage IotanalyticsDatastore#iot_site_wise_multi_layer_storage}.

---

##### `serviceManagedS3`<sup>Optional</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#service_managed_s3 IotanalyticsDatastore#service_managed_s3}.

---

### IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 <a name="IotanalyticsDatastoreDatastoreStorageCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastoreStorageCustomerManagedS3: iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#role_arn IotanalyticsDatastore#role_arn}.

---

### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage: iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.property.customerManagedS3Storage">customerManagedS3Storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}. |

---

##### `customerManagedS3Storage`<sup>Optional</sup> <a name="customerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.property.customerManagedS3Storage"></a>

```typescript
public readonly customerManagedS3Storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#customer_managed_s3_storage IotanalyticsDatastore#customer_managed_s3_storage}.

---

### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage: iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#bucket IotanalyticsDatastore#bucket}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key_prefix IotanalyticsDatastore#key_prefix}.

---

### IotanalyticsDatastoreFileFormatConfiguration <a name="IotanalyticsDatastoreFileFormatConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreFileFormatConfiguration: iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.jsonConfiguration">jsonConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.parquetConfiguration">parquetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}. |

---

##### `jsonConfiguration`<sup>Optional</sup> <a name="jsonConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.jsonConfiguration"></a>

```typescript
public readonly jsonConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#json_configuration IotanalyticsDatastore#json_configuration}.

---

##### `parquetConfiguration`<sup>Optional</sup> <a name="parquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration.property.parquetConfiguration"></a>

```typescript
public readonly parquetConfiguration: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#parquet_configuration IotanalyticsDatastore#parquet_configuration}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreFileFormatConfigurationParquetConfiguration: iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.property.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}. |

---

##### `schemaDefinition`<sup>Optional</sup> <a name="schemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#schema_definition IotanalyticsDatastore#schema_definition}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition: iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.property.columns">columns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.property.columns"></a>

```typescript
public readonly columns: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#columns IotanalyticsDatastore#columns}.

---

### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns: iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#name IotanalyticsDatastore#name}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#type IotanalyticsDatastore#type}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#name IotanalyticsDatastore#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#type IotanalyticsDatastore#type}.

---

### IotanalyticsDatastoreRetentionPeriod <a name="IotanalyticsDatastoreRetentionPeriod" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreRetentionPeriod: iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}. |

---

##### `numberOfDays`<sup>Optional</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#number_of_days IotanalyticsDatastore#number_of_days}.

---

##### `unlimited`<sup>Optional</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#unlimited IotanalyticsDatastore#unlimited}.

---

### IotanalyticsDatastoreTags <a name="IotanalyticsDatastoreTags" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

const iotanalyticsDatastoreTags: iotanalyticsDatastore.IotanalyticsDatastoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key IotanalyticsDatastore#key}. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#value IotanalyticsDatastore#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#key IotanalyticsDatastore#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotanalytics_datastore#value IotanalyticsDatastore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotanalyticsDatastoreDatastorePartitionsOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions">putPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resetPartitions">resetPartitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitions` <a name="putPartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions"></a>

```typescript
public putPartitions(value: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.putPartitions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]

---

##### `resetPartitions` <a name="resetPartitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.resetPartitions"></a>

```typescript
public resetPartitions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList">IotanalyticsDatastoreDatastorePartitionsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitionsInput">partitionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions"></a>

```typescript
public readonly partitions: IotanalyticsDatastoreDatastorePartitionsPartitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList">IotanalyticsDatastoreDatastorePartitionsPartitionsList</a>

---

##### `partitionsInput`<sup>Optional</sup> <a name="partitionsInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitionsInput"></a>

```typescript
public readonly partitionsInput: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastorePartitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitions">IotanalyticsDatastoreDatastorePartitions</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsList <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get"></a>

```typescript
public get(index: number): IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>[]

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition">putPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition">putTimestampPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetTimestampPartition">resetTimestampPartition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartition` <a name="putPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition"></a>

```typescript
public putPartition(value: IotanalyticsDatastoreDatastorePartitionsPartitionsPartition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---

##### `putTimestampPartition` <a name="putTimestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition"></a>

```typescript
public putTimestampPartition(value: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.putTimestampPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---

##### `resetPartition` <a name="resetPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetTimestampPartition` <a name="resetTimestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resetTimestampPartition"></a>

```typescript
public resetTimestampPartition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition">timestampPartition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partitionInput">partitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartitionInput">timestampPartitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition"></a>

```typescript
public readonly partition: IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a>

---

##### `timestampPartition`<sup>Required</sup> <a name="timestampPartition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition"></a>

```typescript
public readonly timestampPartition: IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a>

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---

##### `timestampPartitionInput`<sup>Optional</sup> <a name="timestampPartitionInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartitionInput"></a>

```typescript
public readonly timestampPartitionInput: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitions">IotanalyticsDatastoreDatastorePartitionsPartitions</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---


### IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference <a name="IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetAttributeName">resetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeName` <a name="resetAttributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetAttributeName"></a>

```typescript
public resetAttributeName(): void
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resetTimestampFormat"></a>

```typescript
public resetTimestampFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeNameInput">attributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeNameInput`<sup>Optional</sup> <a name="attributeNameInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeNameInput"></a>

```typescript
public readonly attributeNameInput: string;
```

- *Type:* string

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormatInput"></a>

```typescript
public readonly timestampFormatInput: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">IotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---


### IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference <a name="IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastoreStorageCustomerManagedS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---


### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---


### IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage">putCustomerManagedS3Storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resetCustomerManagedS3Storage">resetCustomerManagedS3Storage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedS3Storage` <a name="putCustomerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage"></a>

```typescript
public putCustomerManagedS3Storage(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.putCustomerManagedS3Storage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---

##### `resetCustomerManagedS3Storage` <a name="resetCustomerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resetCustomerManagedS3Storage"></a>

```typescript
public resetCustomerManagedS3Storage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage">customerManagedS3Storage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3StorageInput">customerManagedS3StorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3Storage`<sup>Required</sup> <a name="customerManagedS3Storage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage"></a>

```typescript
public readonly customerManagedS3Storage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a>

---

##### `customerManagedS3StorageInput`<sup>Optional</sup> <a name="customerManagedS3StorageInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3StorageInput"></a>

```typescript
public readonly customerManagedS3StorageInput: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---


### IotanalyticsDatastoreDatastoreStorageOutputReference <a name="IotanalyticsDatastoreDatastoreStorageOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3">putCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage">putIotSiteWiseMultiLayerStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetCustomerManagedS3">resetCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetIotSiteWiseMultiLayerStorage">resetIotSiteWiseMultiLayerStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetServiceManagedS3">resetServiceManagedS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerManagedS3` <a name="putCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3"></a>

```typescript
public putCustomerManagedS3(value: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putCustomerManagedS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---

##### `putIotSiteWiseMultiLayerStorage` <a name="putIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage"></a>

```typescript
public putIotSiteWiseMultiLayerStorage(value: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.putIotSiteWiseMultiLayerStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---

##### `resetCustomerManagedS3` <a name="resetCustomerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetCustomerManagedS3"></a>

```typescript
public resetCustomerManagedS3(): void
```

##### `resetIotSiteWiseMultiLayerStorage` <a name="resetIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetIotSiteWiseMultiLayerStorage"></a>

```typescript
public resetIotSiteWiseMultiLayerStorage(): void
```

##### `resetServiceManagedS3` <a name="resetServiceManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.resetServiceManagedS3"></a>

```typescript
public resetServiceManagedS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage">iotSiteWiseMultiLayerStorage</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3Input">customerManagedS3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorageInput">iotSiteWiseMultiLayerStorageInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3Input">serviceManagedS3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3`<sup>Required</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a>

---

##### `iotSiteWiseMultiLayerStorage`<sup>Required</sup> <a name="iotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage"></a>

```typescript
public readonly iotSiteWiseMultiLayerStorage: IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a>

---

##### `customerManagedS3Input`<sup>Optional</sup> <a name="customerManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3Input"></a>

```typescript
public readonly customerManagedS3Input: IResolvable | IotanalyticsDatastoreDatastoreStorageCustomerManagedS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageCustomerManagedS3">IotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---

##### `iotSiteWiseMultiLayerStorageInput`<sup>Optional</sup> <a name="iotSiteWiseMultiLayerStorageInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorageInput"></a>

```typescript
public readonly iotSiteWiseMultiLayerStorageInput: IResolvable | IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">IotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---

##### `serviceManagedS3Input`<sup>Optional</sup> <a name="serviceManagedS3Input" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3Input"></a>

```typescript
public readonly serviceManagedS3Input: string;
```

- *Type:* string

---

##### `serviceManagedS3`<sup>Required</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreDatastoreStorage;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreDatastoreStorage">IotanalyticsDatastoreDatastoreStorage</a>

---


### IotanalyticsDatastoreFileFormatConfigurationOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration">putParquetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetJsonConfiguration">resetJsonConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetParquetConfiguration">resetParquetConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParquetConfiguration` <a name="putParquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration"></a>

```typescript
public putParquetConfiguration(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.putParquetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---

##### `resetJsonConfiguration` <a name="resetJsonConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetJsonConfiguration"></a>

```typescript
public resetJsonConfiguration(): void
```

##### `resetParquetConfiguration` <a name="resetParquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.resetParquetConfiguration"></a>

```typescript
public resetParquetConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration">parquetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfigurationInput">jsonConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfigurationInput">parquetConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration">jsonConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parquetConfiguration`<sup>Required</sup> <a name="parquetConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration"></a>

```typescript
public readonly parquetConfiguration: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a>

---

##### `jsonConfigurationInput`<sup>Optional</sup> <a name="jsonConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfigurationInput"></a>

```typescript
public readonly jsonConfigurationInput: string;
```

- *Type:* string

---

##### `parquetConfigurationInput`<sup>Optional</sup> <a name="parquetConfigurationInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfigurationInput"></a>

```typescript
public readonly parquetConfigurationInput: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---

##### `jsonConfiguration`<sup>Required</sup> <a name="jsonConfiguration" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration"></a>

```typescript
public readonly jsonConfiguration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreFileFormatConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfiguration">IotanalyticsDatastoreFileFormatConfiguration</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition">putSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resetSchemaDefinition">resetSchemaDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaDefinition` <a name="putSchemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition"></a>

```typescript
public putSchemaDefinition(value: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.putSchemaDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---

##### `resetSchemaDefinition` <a name="resetSchemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resetSchemaDefinition"></a>

```typescript
public resetSchemaDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a>

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">IotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get"></a>

```typescript
public get(index: number): IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>

---


### IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference <a name="IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resetColumns">resetColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]

---

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns"></a>

```typescript
public readonly columns: IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">IotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---


### IotanalyticsDatastoreRetentionPeriodOutputReference <a name="IotanalyticsDatastoreRetentionPeriodOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetNumberOfDays">resetNumberOfDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetUnlimited">resetUnlimited</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNumberOfDays` <a name="resetNumberOfDays" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetNumberOfDays"></a>

```typescript
public resetNumberOfDays(): void
```

##### `resetUnlimited` <a name="resetUnlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.resetUnlimited"></a>

```typescript
public resetUnlimited(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDaysInput">numberOfDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimitedInput">unlimitedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDaysInput`<sup>Optional</sup> <a name="numberOfDaysInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDaysInput"></a>

```typescript
public readonly numberOfDaysInput: number;
```

- *Type:* number

---

##### `unlimitedInput`<sup>Optional</sup> <a name="unlimitedInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimitedInput"></a>

```typescript
public readonly unlimitedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberOfDays`<sup>Required</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited"></a>

```typescript
public readonly unlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreRetentionPeriod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreRetentionPeriod">IotanalyticsDatastoreRetentionPeriod</a>

---


### IotanalyticsDatastoreTagsList <a name="IotanalyticsDatastoreTagsList" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get"></a>

```typescript
public get(index: number): IotanalyticsDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>[]

---


### IotanalyticsDatastoreTagsOutputReference <a name="IotanalyticsDatastoreTagsOutputReference" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer"></a>

```typescript
import { iotanalyticsDatastore } from '@cdktn/provider-awscc'

new iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotanalyticsDatastoreTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotanalyticsDatastore.IotanalyticsDatastoreTags">IotanalyticsDatastoreTags</a>

---



