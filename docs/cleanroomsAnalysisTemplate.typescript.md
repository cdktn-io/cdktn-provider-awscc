# `cleanroomsAnalysisTemplate` Submodule <a name="`cleanroomsAnalysisTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsAnalysisTemplate <a name="CleanroomsAnalysisTemplate" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate(scope: Construct, id: string, config: CleanroomsAnalysisTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig">CleanroomsAnalysisTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig">CleanroomsAnalysisTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters">putAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration">putErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata">putSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters">putSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters">resetAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration">resetErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata">resetSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters">resetSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalysisParameters` <a name="putAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters"></a>

```typescript
public putAnalysisParameters(value: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]

---

##### `putErrorMessageConfiguration` <a name="putErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration"></a>

```typescript
public putErrorMessageConfiguration(value: CleanroomsAnalysisTemplateErrorMessageConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema"></a>

```typescript
public putSchema(value: CleanroomsAnalysisTemplateSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource"></a>

```typescript
public putSource(value: CleanroomsAnalysisTemplateSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---

##### `putSourceMetadata` <a name="putSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata"></a>

```typescript
public putSourceMetadata(value: CleanroomsAnalysisTemplateSourceMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---

##### `putSyntheticDataParameters` <a name="putSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters"></a>

```typescript
public putSyntheticDataParameters(value: CleanroomsAnalysisTemplateSyntheticDataParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsAnalysisTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]

---

##### `resetAnalysisParameters` <a name="resetAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters"></a>

```typescript
public resetAnalysisParameters(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetErrorMessageConfiguration` <a name="resetErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration"></a>

```typescript
public resetErrorMessageConfiguration(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetSourceMetadata` <a name="resetSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata"></a>

```typescript
public resetSourceMetadata(): void
```

##### `resetSyntheticDataParameters` <a name="resetSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters"></a>

```typescript
public resetSyntheticDataParameters(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsAnalysisTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsAnalysisTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsAnalysisTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters">analysisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier">analysisTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration">errorMessageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn">membershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata">sourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters">syntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput">analysisParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput">errorMessageConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput">schemaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput">sourceMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput">syntheticDataParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `analysisParameters`<sup>Required</sup> <a name="analysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters"></a>

```typescript
public readonly analysisParameters: CleanroomsAnalysisTemplateAnalysisParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a>

---

##### `analysisTemplateIdentifier`<sup>Required</sup> <a name="analysisTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier"></a>

```typescript
public readonly analysisTemplateIdentifier: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `errorMessageConfiguration`<sup>Required</sup> <a name="errorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration"></a>

```typescript
public readonly errorMessageConfiguration: CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn"></a>

```typescript
public readonly membershipArn: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema"></a>

```typescript
public readonly schema: CleanroomsAnalysisTemplateSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source"></a>

```typescript
public readonly source: CleanroomsAnalysisTemplateSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a>

---

##### `sourceMetadata`<sup>Required</sup> <a name="sourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata"></a>

```typescript
public readonly sourceMetadata: CleanroomsAnalysisTemplateSourceMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a>

---

##### `syntheticDataParameters`<sup>Required</sup> <a name="syntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters"></a>

```typescript
public readonly syntheticDataParameters: CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags"></a>

```typescript
public readonly tags: CleanroomsAnalysisTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a>

---

##### `analysisParametersInput`<sup>Optional</sup> <a name="analysisParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput"></a>

```typescript
public readonly analysisParametersInput: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `errorMessageConfigurationInput`<sup>Optional</sup> <a name="errorMessageConfigurationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput"></a>

```typescript
public readonly errorMessageConfigurationInput: IResolvable | CleanroomsAnalysisTemplateErrorMessageConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput"></a>

```typescript
public readonly membershipIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput"></a>

```typescript
public readonly schemaInput: IResolvable | CleanroomsAnalysisTemplateSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | CleanroomsAnalysisTemplateSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---

##### `sourceMetadataInput`<sup>Optional</sup> <a name="sourceMetadataInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput"></a>

```typescript
public readonly sourceMetadataInput: IResolvable | CleanroomsAnalysisTemplateSourceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---

##### `syntheticDataParametersInput`<sup>Optional</sup> <a name="syntheticDataParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput"></a>

```typescript
public readonly syntheticDataParametersInput: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsAnalysisTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsAnalysisTemplateAnalysisParameters <a name="CleanroomsAnalysisTemplateAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateAnalysisParameters: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateConfig <a name="CleanroomsAnalysisTemplateConfig" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateConfig: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters">analysisParameters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]</code> | The member who can query can provide this placeholder for a literal data value in an analysis template. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration">errorMessageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata">sourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters">syntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source"></a>

```typescript
public readonly source: CleanroomsAnalysisTemplateSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}.

---

##### `analysisParameters`<sup>Optional</sup> <a name="analysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters"></a>

```typescript
public readonly analysisParameters: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]

The member who can query can provide this placeholder for a literal data value in an analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#analysis_parameters CleanroomsAnalysisTemplate#analysis_parameters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}.

---

##### `errorMessageConfiguration`<sup>Optional</sup> <a name="errorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration"></a>

```typescript
public readonly errorMessageConfiguration: CleanroomsAnalysisTemplateErrorMessageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema"></a>

```typescript
public readonly schema: CleanroomsAnalysisTemplateSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}.

---

##### `sourceMetadata`<sup>Optional</sup> <a name="sourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata"></a>

```typescript
public readonly sourceMetadata: CleanroomsAnalysisTemplateSourceMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}.

---

##### `syntheticDataParameters`<sup>Optional</sup> <a name="syntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters"></a>

```typescript
public readonly syntheticDataParameters: CleanroomsAnalysisTemplateSyntheticDataParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsAnalysisTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#tags CleanroomsAnalysisTemplate#tags}

---

### CleanroomsAnalysisTemplateErrorMessageConfiguration <a name="CleanroomsAnalysisTemplateErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateErrorMessageConfiguration: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateSchema <a name="CleanroomsAnalysisTemplateSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSchema: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables">referencedTables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}. |

---

##### `referencedTables`<sup>Optional</sup> <a name="referencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables"></a>

```typescript
public readonly referencedTables: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}.

---

### CleanroomsAnalysisTemplateSource <a name="CleanroomsAnalysisTemplateSource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSource: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text">text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}. |

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts"></a>

```typescript
public readonly artifacts: CleanroomsAnalysisTemplateSourceArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}.

---

### CleanroomsAnalysisTemplateSourceArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceArtifacts: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts">additionalArtifacts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}. |

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}.

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint"></a>

```typescript
public readonly entryPoint: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location"></a>

```typescript
public readonly location: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPoint <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceArtifactsEntryPoint: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location"></a>

```typescript
public readonly location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceMetadata <a name="CleanroomsAnalysisTemplateSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceMetadata: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |

---

##### `artifacts`<sup>Optional</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts"></a>

```typescript
public readonly artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifacts;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifacts <a name="CleanroomsAnalysisTemplateSourceMetadataArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceMetadataArtifacts: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes">additionalArtifactHashes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash">entryPointHash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}. |

---

##### `additionalArtifactHashes`<sup>Optional</sup> <a name="additionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes"></a>

```typescript
public readonly additionalArtifactHashes: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}.

---

##### `entryPointHash`<sup>Optional</sup> <a name="entryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash"></a>

```typescript
public readonly entryPointHash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256">sha256</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256">sha256</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `sha256`<sup>Optional</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSyntheticDataParameters: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters">mlSyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}. |

---

##### `mlSyntheticDataParameters`<sup>Optional</sup> <a name="mlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters"></a>

```typescript
public readonly mlSyntheticDataParameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification">columnClassification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon">epsilon</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore">maxMembershipInferenceAttackScore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}. |

---

##### `columnClassification`<sup>Optional</sup> <a name="columnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification"></a>

```typescript
public readonly columnClassification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}.

---

##### `epsilon`<sup>Optional</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}.

---

##### `maxMembershipInferenceAttackScore`<sup>Optional</sup> <a name="maxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore"></a>

```typescript
public readonly maxMembershipInferenceAttackScore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping">columnMapping</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}. |

---

##### `columnMapping`<sup>Optional</sup> <a name="columnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping"></a>

```typescript
public readonly columnMapping: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType">columnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue">isPredictiveValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}. |

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}.

---

##### `columnType`<sup>Optional</sup> <a name="columnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}.

---

##### `isPredictiveValue`<sup>Optional</sup> <a name="isPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue"></a>

```typescript
public readonly isPredictiveValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}.

---

### CleanroomsAnalysisTemplateTags <a name="CleanroomsAnalysisTemplateTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

const cleanroomsAnalysisTemplateTags: cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsAnalysisTemplateAnalysisParametersList <a name="CleanroomsAnalysisTemplateAnalysisParametersList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get"></a>

```typescript
public get(index: number): CleanroomsAnalysisTemplateAnalysisParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>[]

---


### CleanroomsAnalysisTemplateAnalysisParametersOutputReference <a name="CleanroomsAnalysisTemplateAnalysisParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateAnalysisParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters">CleanroomsAnalysisTemplateAnalysisParameters</a>

---


### CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference <a name="CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateErrorMessageConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---


### CleanroomsAnalysisTemplateSchemaOutputReference <a name="CleanroomsAnalysisTemplateSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables">resetReferencedTables</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferencedTables` <a name="resetReferencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables"></a>

```typescript
public resetReferencedTables(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput">referencedTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables">referencedTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referencedTablesInput`<sup>Optional</sup> <a name="referencedTablesInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput"></a>

```typescript
public readonly referencedTablesInput: string[];
```

- *Type:* string[]

---

##### `referencedTables`<sup>Required</sup> <a name="referencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables"></a>

```typescript
public readonly referencedTables: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSchema;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get"></a>

```typescript
public get(index: number): CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation"></a>

```typescript
public putLocation(value: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location"></a>

```typescript
public readonly location: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation">resetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation"></a>

```typescript
public putLocation(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location"></a>

```typescript
public readonly location: CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---


### CleanroomsAnalysisTemplateSourceArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts">putAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint">putEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts">resetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalArtifacts` <a name="putAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts"></a>

```typescript
public putAdditionalArtifacts(value: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]

---

##### `putEntryPoint` <a name="putEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint"></a>

```typescript
public putEntryPoint(value: CleanroomsAnalysisTemplateSourceArtifactsEntryPoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---

##### `resetAdditionalArtifacts` <a name="resetAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts"></a>

```typescript
public resetAdditionalArtifacts(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts">additionalArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput">additionalArtifactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput">entryPointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalArtifacts`<sup>Required</sup> <a name="additionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a>

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a>

---

##### `additionalArtifactsInput`<sup>Optional</sup> <a name="additionalArtifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput"></a>

```typescript
public readonly additionalArtifactsInput: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>[]

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: IResolvable | CleanroomsAnalysisTemplateSourceArtifactsEntryPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get"></a>

```typescript
public get(index: number): CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256">resetSha256</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha256` <a name="resetSha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256"></a>

```typescript
public resetSha256(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input">sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input"></a>

```typescript
public readonly sha256Input: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256">resetSha256</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha256` <a name="resetSha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256"></a>

```typescript
public resetSha256(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input">sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sha256Input`<sup>Optional</sup> <a name="sha256Input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input"></a>

```typescript
public readonly sha256Input: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes">putAdditionalArtifactHashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash">putEntryPointHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes">resetAdditionalArtifactHashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash">resetEntryPointHash</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalArtifactHashes` <a name="putAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes"></a>

```typescript
public putAdditionalArtifactHashes(value: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]

---

##### `putEntryPointHash` <a name="putEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash"></a>

```typescript
public putEntryPointHash(value: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---

##### `resetAdditionalArtifactHashes` <a name="resetAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes"></a>

```typescript
public resetAdditionalArtifactHashes(): void
```

##### `resetEntryPointHash` <a name="resetEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash"></a>

```typescript
public resetEntryPointHash(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes">additionalArtifactHashes</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash">entryPointHash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput">additionalArtifactHashesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput">entryPointHashInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalArtifactHashes`<sup>Required</sup> <a name="additionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes"></a>

```typescript
public readonly additionalArtifactHashes: CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a>

---

##### `entryPointHash`<sup>Required</sup> <a name="entryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash"></a>

```typescript
public readonly entryPointHash: CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a>

---

##### `additionalArtifactHashesInput`<sup>Optional</sup> <a name="additionalArtifactHashesInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput"></a>

```typescript
public readonly additionalArtifactHashesInput: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>[]

---

##### `entryPointHashInput`<sup>Optional</sup> <a name="entryPointHashInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput"></a>

```typescript
public readonly entryPointHashInput: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---


### CleanroomsAnalysisTemplateSourceMetadataOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts">putArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts">resetArtifacts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArtifacts` <a name="putArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts"></a>

```typescript
public putArtifacts(value: CleanroomsAnalysisTemplateSourceMetadataArtifacts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---

##### `resetArtifacts` <a name="resetArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts"></a>

```typescript
public resetArtifacts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput">artifactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts"></a>

```typescript
public readonly artifacts: CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a>

---

##### `artifactsInput`<sup>Optional</sup> <a name="artifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput"></a>

```typescript
public readonly artifactsInput: IResolvable | CleanroomsAnalysisTemplateSourceMetadataArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSourceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---


### CleanroomsAnalysisTemplateSourceOutputReference <a name="CleanroomsAnalysisTemplateSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts">putArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts">resetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putArtifacts` <a name="putArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts"></a>

```typescript
public putArtifacts(value: CleanroomsAnalysisTemplateSourceArtifacts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---

##### `resetArtifacts` <a name="resetArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts"></a>

```typescript
public resetArtifacts(): void
```

##### `resetText` <a name="resetText" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts">artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput">artifactsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts"></a>

```typescript
public readonly artifacts: CleanroomsAnalysisTemplateSourceArtifactsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a>

---

##### `artifactsInput`<sup>Optional</sup> <a name="artifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput"></a>

```typescript
public readonly artifactsInput: IResolvable | CleanroomsAnalysisTemplateSourceArtifacts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get"></a>

```typescript
public get(index: number): CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType">resetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue">resetIsPredictiveValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetColumnType` <a name="resetColumnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType"></a>

```typescript
public resetColumnType(): void
```

##### `resetIsPredictiveValue` <a name="resetIsPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue"></a>

```typescript
public resetIsPredictiveValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput">columnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput">isPredictiveValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType">columnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue">isPredictiveValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `columnTypeInput`<sup>Optional</sup> <a name="columnTypeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput"></a>

```typescript
public readonly columnTypeInput: string;
```

- *Type:* string

---

##### `isPredictiveValueInput`<sup>Optional</sup> <a name="isPredictiveValueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput"></a>

```typescript
public readonly isPredictiveValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `columnType`<sup>Required</sup> <a name="columnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType"></a>

```typescript
public readonly columnType: string;
```

- *Type:* string

---

##### `isPredictiveValue`<sup>Required</sup> <a name="isPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue"></a>

```typescript
public readonly isPredictiveValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping">putColumnMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping">resetColumnMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnMapping` <a name="putColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping"></a>

```typescript
public putColumnMapping(value: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]

---

##### `resetColumnMapping` <a name="resetColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping"></a>

```typescript
public resetColumnMapping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping">columnMapping</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput">columnMappingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnMapping`<sup>Required</sup> <a name="columnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping"></a>

```typescript
public readonly columnMapping: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a>

---

##### `columnMappingInput`<sup>Optional</sup> <a name="columnMappingInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput"></a>

```typescript
public readonly columnMappingInput: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification">putColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification">resetColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon">resetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore">resetMaxMembershipInferenceAttackScore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnClassification` <a name="putColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification"></a>

```typescript
public putColumnClassification(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---

##### `resetColumnClassification` <a name="resetColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification"></a>

```typescript
public resetColumnClassification(): void
```

##### `resetEpsilon` <a name="resetEpsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon"></a>

```typescript
public resetEpsilon(): void
```

##### `resetMaxMembershipInferenceAttackScore` <a name="resetMaxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore"></a>

```typescript
public resetMaxMembershipInferenceAttackScore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification">columnClassification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput">columnClassificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput">epsilonInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput">maxMembershipInferenceAttackScoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon">epsilon</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore">maxMembershipInferenceAttackScore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnClassification`<sup>Required</sup> <a name="columnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification"></a>

```typescript
public readonly columnClassification: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a>

---

##### `columnClassificationInput`<sup>Optional</sup> <a name="columnClassificationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput"></a>

```typescript
public readonly columnClassificationInput: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---

##### `epsilonInput`<sup>Optional</sup> <a name="epsilonInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput"></a>

```typescript
public readonly epsilonInput: number;
```

- *Type:* number

---

##### `maxMembershipInferenceAttackScoreInput`<sup>Optional</sup> <a name="maxMembershipInferenceAttackScoreInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput"></a>

```typescript
public readonly maxMembershipInferenceAttackScoreInput: number;
```

- *Type:* number

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

---

##### `maxMembershipInferenceAttackScore`<sup>Required</sup> <a name="maxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore"></a>

```typescript
public readonly maxMembershipInferenceAttackScore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---


### CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters">putMlSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters">resetMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlSyntheticDataParameters` <a name="putMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters"></a>

```typescript
public putMlSyntheticDataParameters(value: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---

##### `resetMlSyntheticDataParameters` <a name="resetMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters"></a>

```typescript
public resetMlSyntheticDataParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters">mlSyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput">mlSyntheticDataParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mlSyntheticDataParameters`<sup>Required</sup> <a name="mlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters"></a>

```typescript
public readonly mlSyntheticDataParameters: CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a>

---

##### `mlSyntheticDataParametersInput`<sup>Optional</sup> <a name="mlSyntheticDataParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput"></a>

```typescript
public readonly mlSyntheticDataParametersInput: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateSyntheticDataParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---


### CleanroomsAnalysisTemplateTagsList <a name="CleanroomsAnalysisTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get"></a>

```typescript
public get(index: number): CleanroomsAnalysisTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>[]

---


### CleanroomsAnalysisTemplateTagsOutputReference <a name="CleanroomsAnalysisTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsAnalysisTemplate } from '@cdktn/provider-awscc'

new cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsAnalysisTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags">CleanroomsAnalysisTemplateTags</a>

---



