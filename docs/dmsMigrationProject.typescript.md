# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-awscc.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project awscc_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProject(scope: Construct, id: string, config?: DmsMigrationProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">putSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors">putSourceDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors">putTargetDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier">resetInstanceProfileIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName">resetInstanceProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime">resetMigrationProjectCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier">resetMigrationProjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName">resetMigrationProjectName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">resetSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors">resetSourceDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors">resetTargetDataProviderDescriptors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">resetTransformationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaConversionApplicationAttributes` <a name="putSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```typescript
public putSchemaConversionApplicationAttributes(value: DmsMigrationProjectSchemaConversionApplicationAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---

##### `putSourceDataProviderDescriptors` <a name="putSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors"></a>

```typescript
public putSourceDataProviderDescriptors(value: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags"></a>

```typescript
public putTags(value: IResolvable | DmsMigrationProjectTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]

---

##### `putTargetDataProviderDescriptors` <a name="putTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors"></a>

```typescript
public putTargetDataProviderDescriptors(value: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileArn"></a>

```typescript
public resetInstanceProfileArn(): void
```

##### `resetInstanceProfileIdentifier` <a name="resetInstanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileIdentifier"></a>

```typescript
public resetInstanceProfileIdentifier(): void
```

##### `resetInstanceProfileName` <a name="resetInstanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetInstanceProfileName"></a>

```typescript
public resetInstanceProfileName(): void
```

##### `resetMigrationProjectCreationTime` <a name="resetMigrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectCreationTime"></a>

```typescript
public resetMigrationProjectCreationTime(): void
```

##### `resetMigrationProjectIdentifier` <a name="resetMigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectIdentifier"></a>

```typescript
public resetMigrationProjectIdentifier(): void
```

##### `resetMigrationProjectName` <a name="resetMigrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetMigrationProjectName"></a>

```typescript
public resetMigrationProjectName(): void
```

##### `resetSchemaConversionApplicationAttributes` <a name="resetSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```typescript
public resetSchemaConversionApplicationAttributes(): void
```

##### `resetSourceDataProviderDescriptors` <a name="resetSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptors"></a>

```typescript
public resetSourceDataProviderDescriptors(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetDataProviderDescriptors` <a name="resetTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptors"></a>

```typescript
public resetTargetDataProviderDescriptors(): void
```

##### `resetTransformationRules` <a name="resetTransformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```typescript
public resetTransformationRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

dmsMigrationProject.DmsMigrationProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

dmsMigrationProject.DmsMigrationProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

dmsMigrationProject.DmsMigrationProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

dmsMigrationProject.DmsMigrationProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn">migrationProjectArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput">instanceProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput">instanceProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput">migrationProjectCreationTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput">migrationProjectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput">migrationProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schemaConversionApplicationAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput">sourceDataProviderDescriptorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput">targetDataProviderDescriptorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformationRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName">migrationProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformationRules</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrationProjectArn`<sup>Required</sup> <a name="migrationProjectArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectArn"></a>

```typescript
public readonly migrationProjectArn: string;
```

- *Type:* string

---

##### `schemaConversionApplicationAttributes`<sup>Required</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```typescript
public readonly schemaConversionApplicationAttributes: DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference">DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference</a>

---

##### `sourceDataProviderDescriptors`<sup>Required</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptors"></a>

```typescript
public readonly sourceDataProviderDescriptors: DmsMigrationProjectSourceDataProviderDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList">DmsMigrationProjectSourceDataProviderDescriptorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```typescript
public readonly tags: DmsMigrationProjectTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList">DmsMigrationProjectTagsList</a>

---

##### `targetDataProviderDescriptors`<sup>Required</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptors"></a>

```typescript
public readonly targetDataProviderDescriptors: DmsMigrationProjectTargetDataProviderDescriptorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList">DmsMigrationProjectTargetDataProviderDescriptorsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `instanceProfileIdentifierInput`<sup>Optional</sup> <a name="instanceProfileIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifierInput"></a>

```typescript
public readonly instanceProfileIdentifierInput: string;
```

- *Type:* string

---

##### `instanceProfileNameInput`<sup>Optional</sup> <a name="instanceProfileNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileNameInput"></a>

```typescript
public readonly instanceProfileNameInput: string;
```

- *Type:* string

---

##### `migrationProjectCreationTimeInput`<sup>Optional</sup> <a name="migrationProjectCreationTimeInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTimeInput"></a>

```typescript
public readonly migrationProjectCreationTimeInput: string;
```

- *Type:* string

---

##### `migrationProjectIdentifierInput`<sup>Optional</sup> <a name="migrationProjectIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifierInput"></a>

```typescript
public readonly migrationProjectIdentifierInput: string;
```

- *Type:* string

---

##### `migrationProjectNameInput`<sup>Optional</sup> <a name="migrationProjectNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectNameInput"></a>

```typescript
public readonly migrationProjectNameInput: string;
```

- *Type:* string

---

##### `schemaConversionApplicationAttributesInput`<sup>Optional</sup> <a name="schemaConversionApplicationAttributesInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```typescript
public readonly schemaConversionApplicationAttributesInput: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---

##### `sourceDataProviderDescriptorsInput`<sup>Optional</sup> <a name="sourceDataProviderDescriptorsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorsInput"></a>

```typescript
public readonly sourceDataProviderDescriptorsInput: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DmsMigrationProjectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]

---

##### `targetDataProviderDescriptorsInput`<sup>Optional</sup> <a name="targetDataProviderDescriptorsInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorsInput"></a>

```typescript
public readonly targetDataProviderDescriptorsInput: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]

---

##### `transformationRulesInput`<sup>Optional</sup> <a name="transformationRulesInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```typescript
public readonly transformationRulesInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `instanceProfileIdentifier`<sup>Required</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileIdentifier"></a>

```typescript
public readonly instanceProfileIdentifier: string;
```

- *Type:* string

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```typescript
public readonly instanceProfileName: string;
```

- *Type:* string

---

##### `migrationProjectCreationTime`<sup>Required</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectCreationTime"></a>

```typescript
public readonly migrationProjectCreationTime: string;
```

- *Type:* string

---

##### `migrationProjectIdentifier`<sup>Required</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectIdentifier"></a>

```typescript
public readonly migrationProjectIdentifier: string;
```

- *Type:* string

---

##### `migrationProjectName`<sup>Required</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.migrationProjectName"></a>

```typescript
public readonly migrationProjectName: string;
```

- *Type:* string

---

##### `transformationRules`<sup>Required</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```typescript
public readonly transformationRules: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

const dmsMigrationProjectConfig: dmsMigrationProject.DmsMigrationProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>string</code> | The optional description of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | The property describes an instance profile arn for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier">instanceProfileIdentifier</a></code> | <code>string</code> | The property describes an instance profile identifier for the migration project. For create. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName">instanceProfileName</a></code> | <code>string</code> | The property describes an instance profile name for the migration project. For read. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime">migrationProjectCreationTime</a></code> | <code>string</code> | The property describes a creating time of the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier">migrationProjectIdentifier</a></code> | <code>string</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName">migrationProjectName</a></code> | <code>string</code> | The property describes a name to identify the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | The property describes schema conversion application attributes for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors">sourceDataProviderDescriptors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]</code> | The property describes source data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors">targetDataProviderDescriptors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]</code> | The property describes target data provider descriptors for the migration project. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformationRules</a></code> | <code>string</code> | The property describes transformation rules for the migration project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The optional description of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

The property describes an instance profile arn for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}

---

##### `instanceProfileIdentifier`<sup>Optional</sup> <a name="instanceProfileIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileIdentifier"></a>

```typescript
public readonly instanceProfileIdentifier: string;
```

- *Type:* string

The property describes an instance profile identifier for the migration project. For create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_identifier DmsMigrationProject#instance_profile_identifier}

---

##### `instanceProfileName`<sup>Optional</sup> <a name="instanceProfileName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileName"></a>

```typescript
public readonly instanceProfileName: string;
```

- *Type:* string

The property describes an instance profile name for the migration project. For read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#instance_profile_name DmsMigrationProject#instance_profile_name}

---

##### `migrationProjectCreationTime`<sup>Optional</sup> <a name="migrationProjectCreationTime" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectCreationTime"></a>

```typescript
public readonly migrationProjectCreationTime: string;
```

- *Type:* string

The property describes a creating time of the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_creation_time DmsMigrationProject#migration_project_creation_time}

---

##### `migrationProjectIdentifier`<sup>Optional</sup> <a name="migrationProjectIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectIdentifier"></a>

```typescript
public readonly migrationProjectIdentifier: string;
```

- *Type:* string

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_identifier DmsMigrationProject#migration_project_identifier}

---

##### `migrationProjectName`<sup>Optional</sup> <a name="migrationProjectName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.migrationProjectName"></a>

```typescript
public readonly migrationProjectName: string;
```

- *Type:* string

The property describes a name to identify the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#migration_project_name DmsMigrationProject#migration_project_name}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```typescript
public readonly schemaConversionApplicationAttributes: DmsMigrationProjectSchemaConversionApplicationAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

The property describes schema conversion application attributes for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptors`<sup>Optional</sup> <a name="sourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptors"></a>

```typescript
public readonly sourceDataProviderDescriptors: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]

The property describes source data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#source_data_provider_descriptors DmsMigrationProject#source_data_provider_descriptors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DmsMigrationProjectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}

---

##### `targetDataProviderDescriptors`<sup>Optional</sup> <a name="targetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptors"></a>

```typescript
public readonly targetDataProviderDescriptors: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]

The property describes target data provider descriptors for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#target_data_provider_descriptors DmsMigrationProject#target_data_provider_descriptors}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```typescript
public readonly transformationRules: string;
```

- *Type:* string

The property describes transformation rules for the migration project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

const dmsMigrationProjectSchemaConversionApplicationAttributes: dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3BucketPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3BucketPath`<sup>Optional</sup> <a name="s3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```typescript
public readonly s3BucketPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3BucketRoleArn`<sup>Optional</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```typescript
public readonly s3BucketRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptors <a name="DmsMigrationProjectSourceDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

const dmsMigrationProjectSourceDataProviderDescriptors: dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Optional</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `dataProviderIdentifier`<sup>Optional</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `dataProviderName`<sup>Optional</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTags <a name="DmsMigrationProjectTags" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

const dmsMigrationProjectTags: dmsMigrationProject.DmsMigrationProjectTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#key DmsMigrationProject#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#value DmsMigrationProject#value}

---

### DmsMigrationProjectTargetDataProviderDescriptors <a name="DmsMigrationProjectTargetDataProviderDescriptors" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

const dmsMigrationProjectTargetDataProviderDescriptors: dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Optional</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `dataProviderIdentifier`<sup>Optional</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_identifier DmsMigrationProject#data_provider_identifier}.

---

##### `dataProviderName`<sup>Optional</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#data_provider_name DmsMigrationProject#data_provider_name}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">resetS3BucketPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">resetS3BucketRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketPath` <a name="resetS3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```typescript
public resetS3BucketPath(): void
```

##### `resetS3BucketRoleArn` <a name="resetS3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```typescript
public resetS3BucketRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3BucketPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3BucketRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3BucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketPathInput`<sup>Optional</sup> <a name="s3BucketPathInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```typescript
public readonly s3BucketPathInput: string;
```

- *Type:* string

---

##### `s3BucketRoleArnInput`<sup>Optional</sup> <a name="s3BucketRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```typescript
public readonly s3BucketRoleArnInput: string;
```

- *Type:* string

---

##### `s3BucketPath`<sup>Required</sup> <a name="s3BucketPath" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```typescript
public readonly s3BucketPath: string;
```

- *Type:* string

---

##### `s3BucketRoleArn`<sup>Required</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```typescript
public readonly s3BucketRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorsList <a name="DmsMigrationProjectSourceDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectSourceDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>[]

---


### DmsMigrationProjectSourceDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn">resetDataProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">resetDataProviderIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName">resetDataProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataProviderArn` <a name="resetDataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```typescript
public resetDataProviderArn(): void
```

##### `resetDataProviderIdentifier` <a name="resetDataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```typescript
public resetDataProviderIdentifier(): void
```

##### `resetDataProviderName` <a name="resetDataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```typescript
public resetDataProviderName(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">dataProviderIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput">dataProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```typescript
public readonly dataProviderArnInput: string;
```

- *Type:* string

---

##### `dataProviderIdentifierInput`<sup>Optional</sup> <a name="dataProviderIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```typescript
public readonly dataProviderIdentifierInput: string;
```

- *Type:* string

---

##### `dataProviderNameInput`<sup>Optional</sup> <a name="dataProviderNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```typescript
public readonly dataProviderNameInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSourceDataProviderDescriptors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptors">DmsMigrationProjectSourceDataProviderDescriptors</a>

---


### DmsMigrationProjectTagsList <a name="DmsMigrationProjectTagsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>[]

---


### DmsMigrationProjectTagsOutputReference <a name="DmsMigrationProjectTagsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTags">DmsMigrationProjectTags</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorsList <a name="DmsMigrationProjectTargetDataProviderDescriptorsList" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectTargetDataProviderDescriptorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>[]

---


### DmsMigrationProjectTargetDataProviderDescriptorsOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorsOutputReference" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-awscc'

new dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn">resetDataProviderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier">resetDataProviderIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName">resetDataProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataProviderArn` <a name="resetDataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderArn"></a>

```typescript
public resetDataProviderArn(): void
```

##### `resetDataProviderIdentifier` <a name="resetDataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderIdentifier"></a>

```typescript
public resetDataProviderIdentifier(): void
```

##### `resetDataProviderName` <a name="resetDataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetDataProviderName"></a>

```typescript
public resetDataProviderName(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput">dataProviderIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput">dataProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier">dataProviderIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArnInput"></a>

```typescript
public readonly dataProviderArnInput: string;
```

- *Type:* string

---

##### `dataProviderIdentifierInput`<sup>Optional</sup> <a name="dataProviderIdentifierInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifierInput"></a>

```typescript
public readonly dataProviderIdentifierInput: string;
```

- *Type:* string

---

##### `dataProviderNameInput`<sup>Optional</sup> <a name="dataProviderNameInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderNameInput"></a>

```typescript
public readonly dataProviderNameInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `dataProviderIdentifier`<sup>Required</sup> <a name="dataProviderIdentifier" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderIdentifier"></a>

```typescript
public readonly dataProviderIdentifier: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTargetDataProviderDescriptors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptors">DmsMigrationProjectTargetDataProviderDescriptors</a>

---



