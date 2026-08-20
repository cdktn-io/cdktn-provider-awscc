# `healthlakeFhirDatastore` Submodule <a name="`healthlakeFhirDatastore` Submodule" id="@cdktn/provider-awscc.healthlakeFhirDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeFhirDatastore <a name="HealthlakeFhirDatastore" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore awscc_healthlake_fhir_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastore(scope: Construct, id: string, config: HealthlakeFhirDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig">HealthlakeFhirDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig">HealthlakeFhirDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration">putIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig">putPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration">putSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName">resetDatastoreName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration">resetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig">resetPreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration">resetSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderConfiguration` <a name="putIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration"></a>

```typescript
public putIdentityProviderConfiguration(value: HealthlakeFhirDatastoreIdentityProviderConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `putPreloadDataConfig` <a name="putPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig"></a>

```typescript
public putPreloadDataConfig(value: HealthlakeFhirDatastorePreloadDataConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putPreloadDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `putSseConfiguration` <a name="putSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration"></a>

```typescript
public putSseConfiguration(value: HealthlakeFhirDatastoreSseConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putSseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags"></a>

```typescript
public putTags(value: IResolvable | HealthlakeFhirDatastoreTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---

##### `resetDatastoreName` <a name="resetDatastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetDatastoreName"></a>

```typescript
public resetDatastoreName(): void
```

##### `resetIdentityProviderConfiguration` <a name="resetIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetIdentityProviderConfiguration"></a>

```typescript
public resetIdentityProviderConfiguration(): void
```

##### `resetPreloadDataConfig` <a name="resetPreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetPreloadDataConfig"></a>

```typescript
public resetPreloadDataConfig(): void
```

##### `resetSseConfiguration` <a name="resetSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetSseConfiguration"></a>

```typescript
public resetSseConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a HealthlakeFhirDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthlakeFhirDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthlakeFhirDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeFhirDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt">createdAt</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn">datastoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint">datastoreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus">datastoreStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput">datastoreNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput">datastoreTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput">identityProviderConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput">preloadDataConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput">sseConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName">datastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.createdAt"></a>

```typescript
public readonly createdAt: HealthlakeFhirDatastoreCreatedAtOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference">HealthlakeFhirDatastoreCreatedAtOutputReference</a>

---

##### `datastoreArn`<sup>Required</sup> <a name="datastoreArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreArn"></a>

```typescript
public readonly datastoreArn: string;
```

- *Type:* string

---

##### `datastoreEndpoint`<sup>Required</sup> <a name="datastoreEndpoint" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreEndpoint"></a>

```typescript
public readonly datastoreEndpoint: string;
```

- *Type:* string

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `datastoreStatus`<sup>Required</sup> <a name="datastoreStatus" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreStatus"></a>

```typescript
public readonly datastoreStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference">HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference</a>

---

##### `preloadDataConfig`<sup>Required</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfig"></a>

```typescript
public readonly preloadDataConfig: HealthlakeFhirDatastorePreloadDataConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference">HealthlakeFhirDatastorePreloadDataConfigOutputReference</a>

---

##### `sseConfiguration`<sup>Required</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfiguration"></a>

```typescript
public readonly sseConfiguration: HealthlakeFhirDatastoreSseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference">HealthlakeFhirDatastoreSseConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tags"></a>

```typescript
public readonly tags: HealthlakeFhirDatastoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList">HealthlakeFhirDatastoreTagsList</a>

---

##### `datastoreNameInput`<sup>Optional</sup> <a name="datastoreNameInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreNameInput"></a>

```typescript
public readonly datastoreNameInput: string;
```

- *Type:* string

---

##### `datastoreTypeVersionInput`<sup>Optional</sup> <a name="datastoreTypeVersionInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersionInput"></a>

```typescript
public readonly datastoreTypeVersionInput: string;
```

- *Type:* string

---

##### `identityProviderConfigurationInput`<sup>Optional</sup> <a name="identityProviderConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.identityProviderConfigurationInput"></a>

```typescript
public readonly identityProviderConfigurationInput: IResolvable | HealthlakeFhirDatastoreIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---

##### `preloadDataConfigInput`<sup>Optional</sup> <a name="preloadDataConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.preloadDataConfigInput"></a>

```typescript
public readonly preloadDataConfigInput: IResolvable | HealthlakeFhirDatastorePreloadDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---

##### `sseConfigurationInput`<sup>Optional</sup> <a name="sseConfigurationInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.sseConfigurationInput"></a>

```typescript
public readonly sseConfigurationInput: IResolvable | HealthlakeFhirDatastoreSseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | HealthlakeFhirDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.datastoreTypeVersion"></a>

```typescript
public readonly datastoreTypeVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeFhirDatastoreConfig <a name="HealthlakeFhirDatastoreConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreConfig: healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion">datastoreTypeVersion</a></code> | <code>string</code> | The FHIR version. Only R4 version data is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName">datastoreName</a></code> | <code>string</code> | The user-generated name for the Data Store. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | The identity provider configuration for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig">preloadDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | The server-side encryption key configuration for a customer provided encryption key. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datastoreTypeVersion`<sup>Required</sup> <a name="datastoreTypeVersion" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreTypeVersion"></a>

```typescript
public readonly datastoreTypeVersion: string;
```

- *Type:* string

The FHIR version. Only R4 version data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_type_version HealthlakeFhirDatastore#datastore_type_version}

---

##### `datastoreName`<sup>Optional</sup> <a name="datastoreName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

The user-generated name for the Data Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#datastore_name HealthlakeFhirDatastore#datastore_name}

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: HealthlakeFhirDatastoreIdentityProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

The identity provider configuration for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#identity_provider_configuration HealthlakeFhirDatastore#identity_provider_configuration}

---

##### `preloadDataConfig`<sup>Optional</sup> <a name="preloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.preloadDataConfig"></a>

```typescript
public readonly preloadDataConfig: HealthlakeFhirDatastorePreloadDataConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_config HealthlakeFhirDatastore#preload_data_config}

---

##### `sseConfiguration`<sup>Optional</sup> <a name="sseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.sseConfiguration"></a>

```typescript
public readonly sseConfiguration: HealthlakeFhirDatastoreSseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

The server-side encryption key configuration for a customer provided encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#sse_configuration HealthlakeFhirDatastore#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | HealthlakeFhirDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#tags HealthlakeFhirDatastore#tags}.

---

### HealthlakeFhirDatastoreCreatedAt <a name="HealthlakeFhirDatastoreCreatedAt" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreCreatedAt: healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt = { ... }
```


### HealthlakeFhirDatastoreIdentityProviderConfiguration <a name="HealthlakeFhirDatastoreIdentityProviderConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreIdentityProviderConfiguration: healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy">authorizationStrategy</a></code> | <code>string</code> | Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled">fineGrainedAuthorizationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to indicate if fine-grained authorization will be enabled for the datastore. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn">idpLambdaArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata">metadata</a></code> | <code>string</code> | The JSON metadata elements for identity provider configuration. |

---

##### `authorizationStrategy`<sup>Optional</sup> <a name="authorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.authorizationStrategy"></a>

```typescript
public readonly authorizationStrategy: string;
```

- *Type:* string

Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#authorization_strategy HealthlakeFhirDatastore#authorization_strategy}

---

##### `fineGrainedAuthorizationEnabled`<sup>Optional</sup> <a name="fineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.fineGrainedAuthorizationEnabled"></a>

```typescript
public readonly fineGrainedAuthorizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to indicate if fine-grained authorization will be enabled for the datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#fine_grained_authorization_enabled HealthlakeFhirDatastore#fine_grained_authorization_enabled}

---

##### `idpLambdaArn`<sup>Optional</sup> <a name="idpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.idpLambdaArn"></a>

```typescript
public readonly idpLambdaArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#idp_lambda_arn HealthlakeFhirDatastore#idp_lambda_arn}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

The JSON metadata elements for identity provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#metadata HealthlakeFhirDatastore#metadata}

---

### HealthlakeFhirDatastorePreloadDataConfig <a name="HealthlakeFhirDatastorePreloadDataConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastorePreloadDataConfig: healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType">preloadDataType</a></code> | <code>string</code> | The type of preloaded data. Only Synthea preloaded data is supported. |

---

##### `preloadDataType`<sup>Optional</sup> <a name="preloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig.property.preloadDataType"></a>

```typescript
public readonly preloadDataType: string;
```

- *Type:* string

The type of preloaded data. Only Synthea preloaded data is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#preload_data_type HealthlakeFhirDatastore#preload_data_type}

---

### HealthlakeFhirDatastoreSseConfiguration <a name="HealthlakeFhirDatastoreSseConfiguration" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreSseConfiguration: healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig">kmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | The customer-managed-key (CMK) used when creating a Data Store. |

---

##### `kmsEncryptionConfig`<sup>Optional</sup> <a name="kmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration.property.kmsEncryptionConfig"></a>

```typescript
public readonly kmsEncryptionConfig: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

The customer-managed-key (CMK) used when creating a Data Store.

If a customer owned key is not specified, an AWS owned key will be used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_encryption_config HealthlakeFhirDatastore#kms_encryption_config}

---

### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig: healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType">cmkType</a></code> | <code>string</code> | The type of customer-managed-key (CMK) used for encryption. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | The KMS encryption key id/alias used to encrypt the Data Store contents at rest. |

---

##### `cmkType`<sup>Optional</sup> <a name="cmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.cmkType"></a>

```typescript
public readonly cmkType: string;
```

- *Type:* string

The type of customer-managed-key (CMK) used for encryption.

The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#cmk_type HealthlakeFhirDatastore#cmk_type}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#kms_key_id HealthlakeFhirDatastore#kms_key_id}

---

### HealthlakeFhirDatastoreTags <a name="HealthlakeFhirDatastoreTags" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

const healthlakeFhirDatastoreTags: healthlakeFhirDatastore.HealthlakeFhirDatastoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#key HealthlakeFhirDatastore#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/healthlake_fhir_datastore#value HealthlakeFhirDatastore#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeFhirDatastoreCreatedAtOutputReference <a name="HealthlakeFhirDatastoreCreatedAtOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos">nanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds">seconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.nanos"></a>

```typescript
public readonly nanos: number;
```

- *Type:* number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.seconds"></a>

```typescript
public readonly seconds: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthlakeFhirDatastoreCreatedAt;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreCreatedAt">HealthlakeFhirDatastoreCreatedAt</a>

---


### HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference <a name="HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy">resetAuthorizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled">resetFineGrainedAuthorizationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn">resetIdpLambdaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationStrategy` <a name="resetAuthorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetAuthorizationStrategy"></a>

```typescript
public resetAuthorizationStrategy(): void
```

##### `resetFineGrainedAuthorizationEnabled` <a name="resetFineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetFineGrainedAuthorizationEnabled"></a>

```typescript
public resetFineGrainedAuthorizationEnabled(): void
```

##### `resetIdpLambdaArn` <a name="resetIdpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetIdpLambdaArn"></a>

```typescript
public resetIdpLambdaArn(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput">authorizationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput">fineGrainedAuthorizationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput">idpLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy">authorizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled">fineGrainedAuthorizationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn">idpLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationStrategyInput`<sup>Optional</sup> <a name="authorizationStrategyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategyInput"></a>

```typescript
public readonly authorizationStrategyInput: string;
```

- *Type:* string

---

##### `fineGrainedAuthorizationEnabledInput`<sup>Optional</sup> <a name="fineGrainedAuthorizationEnabledInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabledInput"></a>

```typescript
public readonly fineGrainedAuthorizationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idpLambdaArnInput`<sup>Optional</sup> <a name="idpLambdaArnInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArnInput"></a>

```typescript
public readonly idpLambdaArnInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `authorizationStrategy`<sup>Required</sup> <a name="authorizationStrategy" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.authorizationStrategy"></a>

```typescript
public readonly authorizationStrategy: string;
```

- *Type:* string

---

##### `fineGrainedAuthorizationEnabled`<sup>Required</sup> <a name="fineGrainedAuthorizationEnabled" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.fineGrainedAuthorizationEnabled"></a>

```typescript
public readonly fineGrainedAuthorizationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idpLambdaArn`<sup>Required</sup> <a name="idpLambdaArn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.idpLambdaArn"></a>

```typescript
public readonly idpLambdaArn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastoreIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreIdentityProviderConfiguration">HealthlakeFhirDatastoreIdentityProviderConfiguration</a>

---


### HealthlakeFhirDatastorePreloadDataConfigOutputReference <a name="HealthlakeFhirDatastorePreloadDataConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType">resetPreloadDataType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreloadDataType` <a name="resetPreloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.resetPreloadDataType"></a>

```typescript
public resetPreloadDataType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput">preloadDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType">preloadDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preloadDataTypeInput`<sup>Optional</sup> <a name="preloadDataTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataTypeInput"></a>

```typescript
public readonly preloadDataTypeInput: string;
```

- *Type:* string

---

##### `preloadDataType`<sup>Required</sup> <a name="preloadDataType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.preloadDataType"></a>

```typescript
public readonly preloadDataType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastorePreloadDataConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastorePreloadDataConfig">HealthlakeFhirDatastorePreloadDataConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType">resetCmkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmkType` <a name="resetCmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetCmkType"></a>

```typescript
public resetCmkType(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput">cmkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType">cmkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmkTypeInput`<sup>Optional</sup> <a name="cmkTypeInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkTypeInput"></a>

```typescript
public readonly cmkTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `cmkType`<sup>Required</sup> <a name="cmkType" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.cmkType"></a>

```typescript
public readonly cmkType: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---


### HealthlakeFhirDatastoreSseConfigurationOutputReference <a name="HealthlakeFhirDatastoreSseConfigurationOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig">putKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig">resetKmsEncryptionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKmsEncryptionConfig` <a name="putKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig"></a>

```typescript
public putKmsEncryptionConfig(value: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.putKmsEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `resetKmsEncryptionConfig` <a name="resetKmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.resetKmsEncryptionConfig"></a>

```typescript
public resetKmsEncryptionConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig">kmsEncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput">kmsEncryptionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsEncryptionConfig`<sup>Required</sup> <a name="kmsEncryptionConfig" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfig"></a>

```typescript
public readonly kmsEncryptionConfig: HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfigOutputReference</a>

---

##### `kmsEncryptionConfigInput`<sup>Optional</sup> <a name="kmsEncryptionConfigInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.kmsEncryptionConfigInput"></a>

```typescript
public readonly kmsEncryptionConfigInput: IResolvable | HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig">HealthlakeFhirDatastoreSseConfigurationKmsEncryptionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastoreSseConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreSseConfiguration">HealthlakeFhirDatastoreSseConfiguration</a>

---


### HealthlakeFhirDatastoreTagsList <a name="HealthlakeFhirDatastoreTagsList" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get"></a>

```typescript
public get(index: number): HealthlakeFhirDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastoreTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>[]

---


### HealthlakeFhirDatastoreTagsOutputReference <a name="HealthlakeFhirDatastoreTagsOutputReference" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer"></a>

```typescript
import { healthlakeFhirDatastore } from '@cdktn/provider-awscc'

new healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | HealthlakeFhirDatastoreTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.healthlakeFhirDatastore.HealthlakeFhirDatastoreTags">HealthlakeFhirDatastoreTags</a>

---



