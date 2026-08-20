# `b2BiTransformer` Submodule <a name="`b2BiTransformer` Submodule" id="@cdktn/provider-awscc.b2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiTransformer <a name="B2BiTransformer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformer(scope: Construct, id: string, config: B2BiTransformerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType">putEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion">putInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping">putMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion">putOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments">putSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType">resetEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat">resetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion">resetInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping">resetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate">resetMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion">resetOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument">resetSampleDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments">resetSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEdiType` <a name="putEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType"></a>

```typescript
public putEdiType(value: B2BiTransformerEdiType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `putInputConversion` <a name="putInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion"></a>

```typescript
public putInputConversion(value: B2BiTransformerInputConversion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `putMapping` <a name="putMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping"></a>

```typescript
public putMapping(value: B2BiTransformerMapping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `putOutputConversion` <a name="putOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion"></a>

```typescript
public putOutputConversion(value: B2BiTransformerOutputConversion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `putSampleDocuments` <a name="putSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments"></a>

```typescript
public putSampleDocuments(value: B2BiTransformerSampleDocuments): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags"></a>

```typescript
public putTags(value: IResolvable | B2BiTransformerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---

##### `resetEdiType` <a name="resetEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType"></a>

```typescript
public resetEdiType(): void
```

##### `resetFileFormat` <a name="resetFileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat"></a>

```typescript
public resetFileFormat(): void
```

##### `resetInputConversion` <a name="resetInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion"></a>

```typescript
public resetInputConversion(): void
```

##### `resetMapping` <a name="resetMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping"></a>

```typescript
public resetMapping(): void
```

##### `resetMappingTemplate` <a name="resetMappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate"></a>

```typescript
public resetMappingTemplate(): void
```

##### `resetOutputConversion` <a name="resetOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion"></a>

```typescript
public resetOutputConversion(): void
```

##### `resetSampleDocument` <a name="resetSampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument"></a>

```typescript
public resetSampleDocument(): void
```

##### `resetSampleDocuments` <a name="resetSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments"></a>

```typescript
public resetSampleDocuments(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

b2BiTransformer.B2BiTransformer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

b2BiTransformer.B2BiTransformer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

b2BiTransformer.B2BiTransformer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

b2BiTransformer.B2BiTransformer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the B2BiTransformer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing B2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the B2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType">ediType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion">inputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion">outputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments">sampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn">transformerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId">transformerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput">ediTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput">fileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput">inputConversionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput">mappingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput">mappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput">outputConversionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput">sampleDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput">sampleDocumentsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat">fileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate">mappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument">sampleDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ediType`<sup>Required</sup> <a name="ediType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType"></a>

```typescript
public readonly ediType: B2BiTransformerEdiTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputConversion`<sup>Required</sup> <a name="inputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion"></a>

```typescript
public readonly inputConversion: B2BiTransformerInputConversionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a>

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping"></a>

```typescript
public readonly mapping: B2BiTransformerMappingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `outputConversion`<sup>Required</sup> <a name="outputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion"></a>

```typescript
public readonly outputConversion: B2BiTransformerOutputConversionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a>

---

##### `sampleDocuments`<sup>Required</sup> <a name="sampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments"></a>

```typescript
public readonly sampleDocuments: B2BiTransformerSampleDocumentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags"></a>

```typescript
public readonly tags: B2BiTransformerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a>

---

##### `transformerArn`<sup>Required</sup> <a name="transformerArn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn"></a>

```typescript
public readonly transformerArn: string;
```

- *Type:* string

---

##### `transformerId`<sup>Required</sup> <a name="transformerId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId"></a>

```typescript
public readonly transformerId: string;
```

- *Type:* string

---

##### `ediTypeInput`<sup>Optional</sup> <a name="ediTypeInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput"></a>

```typescript
public readonly ediTypeInput: IResolvable | B2BiTransformerEdiType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput"></a>

```typescript
public readonly fileFormatInput: string;
```

- *Type:* string

---

##### `inputConversionInput`<sup>Optional</sup> <a name="inputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput"></a>

```typescript
public readonly inputConversionInput: IResolvable | B2BiTransformerInputConversion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `mappingInput`<sup>Optional</sup> <a name="mappingInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput"></a>

```typescript
public readonly mappingInput: IResolvable | B2BiTransformerMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `mappingTemplateInput`<sup>Optional</sup> <a name="mappingTemplateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput"></a>

```typescript
public readonly mappingTemplateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputConversionInput`<sup>Optional</sup> <a name="outputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput"></a>

```typescript
public readonly outputConversionInput: IResolvable | B2BiTransformerOutputConversion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `sampleDocumentInput`<sup>Optional</sup> <a name="sampleDocumentInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput"></a>

```typescript
public readonly sampleDocumentInput: string;
```

- *Type:* string

---

##### `sampleDocumentsInput`<sup>Optional</sup> <a name="sampleDocumentsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput"></a>

```typescript
public readonly sampleDocumentsInput: IResolvable | B2BiTransformerSampleDocuments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | B2BiTransformerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

---

##### `mappingTemplate`<sup>Required</sup> <a name="mappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate"></a>

```typescript
public readonly mappingTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sampleDocument`<sup>Required</sup> <a name="sampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument"></a>

```typescript
public readonly sampleDocument: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiTransformerConfig <a name="B2BiTransformerConfig" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerConfig: b2BiTransformer.B2BiTransformerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType">ediType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat">fileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion">inputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping">mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate">mappingTemplate</a></code> | <code>string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion">outputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument">sampleDocument</a></code> | <code>string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments">sampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}.

---

##### `ediType`<sup>Optional</sup> <a name="ediType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType"></a>

```typescript
public readonly ediType: B2BiTransformerEdiType;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}.

---

##### `fileFormat`<sup>Optional</sup> <a name="fileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat"></a>

```typescript
public readonly fileFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}.

---

##### `inputConversion`<sup>Optional</sup> <a name="inputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion"></a>

```typescript
public readonly inputConversion: B2BiTransformerInputConversion;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}.

---

##### `mapping`<sup>Optional</sup> <a name="mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping"></a>

```typescript
public readonly mapping: B2BiTransformerMapping;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}.

---

##### `mappingTemplate`<sup>Optional</sup> <a name="mappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate"></a>

```typescript
public readonly mappingTemplate: string;
```

- *Type:* string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}

---

##### `outputConversion`<sup>Optional</sup> <a name="outputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion"></a>

```typescript
public readonly outputConversion: B2BiTransformerOutputConversion;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}.

---

##### `sampleDocument`<sup>Optional</sup> <a name="sampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument"></a>

```typescript
public readonly sampleDocument: string;
```

- *Type:* string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}

---

##### `sampleDocuments`<sup>Optional</sup> <a name="sampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments"></a>

```typescript
public readonly sampleDocuments: B2BiTransformerSampleDocuments;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | B2BiTransformerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}.

---

### B2BiTransformerEdiType <a name="B2BiTransformerEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerEdiType: b2BiTransformer.B2BiTransformerEdiType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details">x12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}. |

---

##### `x12Details`<sup>Optional</sup> <a name="x12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details"></a>

```typescript
public readonly x12Details: B2BiTransformerEdiTypeX12Details;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}.

---

### B2BiTransformerEdiTypeX12Details <a name="B2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerEdiTypeX12Details: b2BiTransformer.B2BiTransformerEdiTypeX12Details = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet">transactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transactionSet`<sup>Optional</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerInputConversion <a name="B2BiTransformerInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversion: b2BiTransformer.B2BiTransformerInputConversion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat">fromFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}. |

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: B2BiTransformerInputConversionAdvancedOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions"></a>

```typescript
public readonly formatOptions: B2BiTransformerInputConversionFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `fromFormat`<sup>Optional</sup> <a name="fromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat"></a>

```typescript
public readonly fromFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}.

---

### B2BiTransformerInputConversionAdvancedOptions <a name="B2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptions: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerInputConversionAdvancedOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12 <a name="B2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `splitOptions`<sup>Optional</sup> <a name="splitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions"></a>

```typescript
public readonly splitOptions: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `validationOptions`<sup>Optional</sup> <a name="validationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions"></a>

```typescript
public readonly validationOptions: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12SplitOptions: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy">splitBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `splitBy`<sup>Optional</sup> <a name="splitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">validationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `validationRules`<sup>Optional</sup> <a name="validationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```typescript
public readonly validationRules: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `codeListValidationRule`<sup>Optional</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `elementLengthValidationRule`<sup>Optional</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `elementRequirementValidationRule`<sup>Optional</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `codesToAdd`<sup>Optional</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `codesToRemove`<sup>Optional</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">maxLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">minLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule: b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">elementPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">requirement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `elementPosition`<sup>Optional</sup> <a name="elementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerInputConversionFormatOptions <a name="B2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionFormatOptions: b2BiTransformer.B2BiTransformerInputConversionFormatOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerInputConversionFormatOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionFormatOptionsX12 <a name="B2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerInputConversionFormatOptionsX12: b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet">transactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transactionSet`<sup>Optional</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerMapping <a name="B2BiTransformerMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerMapping: b2BiTransformer.B2BiTransformerMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template">template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage">templateLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}. |

---

##### `template`<sup>Optional</sup> <a name="template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}.

---

##### `templateLanguage`<sup>Optional</sup> <a name="templateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage"></a>

```typescript
public readonly templateLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}.

---

### B2BiTransformerOutputConversion <a name="B2BiTransformerOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversion: b2BiTransformer.B2BiTransformerOutputConversion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat">toFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}. |

---

##### `advancedOptions`<sup>Optional</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: B2BiTransformerOutputConversionAdvancedOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions"></a>

```typescript
public readonly formatOptions: B2BiTransformerOutputConversionFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `toFormat`<sup>Optional</sup> <a name="toFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat"></a>

```typescript
public readonly toFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}.

---

### B2BiTransformerOutputConversionAdvancedOptions <a name="B2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptions: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerOutputConversionAdvancedOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12 <a name="B2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `splitOptions`<sup>Optional</sup> <a name="splitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions"></a>

```typescript
public readonly splitOptions: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `validationOptions`<sup>Optional</sup> <a name="validationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions"></a>

```typescript
public readonly validationOptions: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy">splitBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `splitBy`<sup>Optional</sup> <a name="splitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">validationRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `validationRules`<sup>Optional</sup> <a name="validationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```typescript
public readonly validationRules: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `codeListValidationRule`<sup>Optional</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `elementLengthValidationRule`<sup>Optional</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `elementRequirementValidationRule`<sup>Optional</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `codesToAdd`<sup>Optional</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `codesToRemove`<sup>Optional</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">elementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">maxLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">minLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `elementId`<sup>Optional</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule: b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">elementPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">requirement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `elementPosition`<sup>Optional</sup> <a name="elementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `requirement`<sup>Optional</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerOutputConversionFormatOptions <a name="B2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionFormatOptions: b2BiTransformer.B2BiTransformerOutputConversionFormatOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerOutputConversionFormatOptionsX12;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionFormatOptionsX12 <a name="B2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerOutputConversionFormatOptionsX12: b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet">transactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `transactionSet`<sup>Optional</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerSampleDocuments <a name="B2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerSampleDocuments: b2BiTransformer.B2BiTransformerSampleDocuments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys">keys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}.

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys"></a>

```typescript
public readonly keys: IResolvable | B2BiTransformerSampleDocumentsKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}.

---

### B2BiTransformerSampleDocumentsKeys <a name="B2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerSampleDocumentsKeys: b2BiTransformer.B2BiTransformerSampleDocumentsKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output">output</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}.

---

### B2BiTransformerTags <a name="B2BiTransformerTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

const b2BiTransformerTags: b2BiTransformer.B2BiTransformerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiTransformerEdiTypeOutputReference <a name="B2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerEdiTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details">putX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details">resetX12Details</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12Details` <a name="putX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details"></a>

```typescript
public putX12Details(value: B2BiTransformerEdiTypeX12Details): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `resetX12Details` <a name="resetX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details"></a>

```typescript
public resetX12Details(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details">x12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput">x12DetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12Details`<sup>Required</sup> <a name="x12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```typescript
public readonly x12Details: B2BiTransformerEdiTypeX12DetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `x12DetailsInput`<sup>Optional</sup> <a name="x12DetailsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput"></a>

```typescript
public readonly x12DetailsInput: IResolvable | B2BiTransformerEdiTypeX12Details;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerEdiType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---


### B2BiTransformerEdiTypeX12DetailsOutputReference <a name="B2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet">resetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransactionSet` <a name="resetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```typescript
public resetTransactionSet(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput">transactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSetInput`<sup>Optional</sup> <a name="transactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```typescript
public readonly transactionSetInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerEdiTypeX12Details;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---


### B2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12"></a>

```typescript
public putX12(value: B2BiTransformerInputConversionAdvancedOptionsX12): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12"></a>

```typescript
public resetX12(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input">x12Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerInputConversionAdvancedOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```typescript
public readonly x12Input: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions">putSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions">putValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">resetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">resetValidationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSplitOptions` <a name="putSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```typescript
public putSplitOptions(value: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `putValidationOptions` <a name="putValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```typescript
public putValidationOptions(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `resetSplitOptions` <a name="resetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```typescript
public resetSplitOptions(): void
```

##### `resetValidationOptions` <a name="resetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```typescript
public resetValidationOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">splitOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">validationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitOptions`<sup>Required</sup> <a name="splitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```typescript
public readonly splitOptions: B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```typescript
public readonly validationOptions: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `splitOptionsInput`<sup>Optional</sup> <a name="splitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```typescript
public readonly splitOptionsInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `validationOptionsInput`<sup>Optional</sup> <a name="validationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```typescript
public readonly validationOptionsInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">resetSplitBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSplitBy` <a name="resetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```typescript
public resetSplitBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">splitByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">splitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitByInput`<sup>Optional</sup> <a name="splitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```typescript
public readonly splitByInput: string;
```

- *Type:* string

---

##### `splitBy`<sup>Required</sup> <a name="splitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">putValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">resetValidationRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValidationRules` <a name="putValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```typescript
public putValidationRules(value: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `resetValidationRules` <a name="resetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```typescript
public resetValidationRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">validationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```typescript
public readonly validationRules: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `validationRulesInput`<sup>Optional</sup> <a name="validationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```typescript
public readonly validationRulesInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">resetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">resetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">resetElementId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCodesToAdd` <a name="resetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```typescript
public resetCodesToAdd(): void
```

##### `resetCodesToRemove` <a name="resetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```typescript
public resetCodesToRemove(): void
```

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```typescript
public resetElementId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">codesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">codesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codesToAddInput`<sup>Optional</sup> <a name="codesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```typescript
public readonly codesToAddInput: string[];
```

- *Type:* string[]

---

##### `codesToRemoveInput`<sup>Optional</sup> <a name="codesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```typescript
public readonly codesToRemoveInput: string[];
```

- *Type:* string[]

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `codesToAdd`<sup>Required</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

---

##### `codesToRemove`<sup>Required</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">resetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```typescript
public resetElementId(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">resetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">resetRequirement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElementPosition` <a name="resetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```typescript
public resetElementPosition(): void
```

##### `resetRequirement` <a name="resetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```typescript
public resetRequirement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">elementPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">requirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">elementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementPositionInput`<sup>Optional</sup> <a name="elementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```typescript
public readonly elementPositionInput: string;
```

- *Type:* string

---

##### `requirementInput`<sup>Optional</sup> <a name="requirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```typescript
public readonly requirementInput: string;
```

- *Type:* string

---

##### `elementPosition`<sup>Required</sup> <a name="elementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```typescript
public get(index: number): B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">putCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">putElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">putElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">resetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">resetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">resetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeListValidationRule` <a name="putCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```typescript
public putCodeListValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `putElementLengthValidationRule` <a name="putElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```typescript
public putElementLengthValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `putElementRequirementValidationRule` <a name="putElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```typescript
public putElementRequirementValidationRule(value: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `resetCodeListValidationRule` <a name="resetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```typescript
public resetCodeListValidationRule(): void
```

##### `resetElementLengthValidationRule` <a name="resetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```typescript
public resetElementLengthValidationRule(): void
```

##### `resetElementRequirementValidationRule` <a name="resetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```typescript
public resetElementRequirementValidationRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">codeListValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">elementLengthValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">elementRequirementValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeListValidationRule`<sup>Required</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `elementLengthValidationRule`<sup>Required</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `elementRequirementValidationRule`<sup>Required</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `codeListValidationRuleInput`<sup>Optional</sup> <a name="codeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```typescript
public readonly codeListValidationRuleInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `elementLengthValidationRuleInput`<sup>Optional</sup> <a name="elementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```typescript
public readonly elementLengthValidationRuleInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `elementRequirementValidationRuleInput`<sup>Optional</sup> <a name="elementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```typescript
public readonly elementRequirementValidationRuleInput: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerInputConversionFormatOptionsOutputReference <a name="B2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12"></a>

```typescript
public putX12(value: B2BiTransformerInputConversionFormatOptionsX12): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12"></a>

```typescript
public resetX12(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input">x12Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerInputConversionFormatOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input"></a>

```typescript
public readonly x12Input: IResolvable | B2BiTransformerInputConversionFormatOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---


### B2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet">resetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransactionSet` <a name="resetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```typescript
public resetTransactionSet(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput">transactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSetInput`<sup>Optional</sup> <a name="transactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```typescript
public readonly transactionSetInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversionFormatOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---


### B2BiTransformerInputConversionOutputReference <a name="B2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerInputConversionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions">putAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat">resetFromFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedOptions` <a name="putAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions"></a>

```typescript
public putAdvancedOptions(value: B2BiTransformerInputConversionAdvancedOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions"></a>

```typescript
public putFormatOptions(value: B2BiTransformerInputConversionFormatOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions"></a>

```typescript
public resetAdvancedOptions(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetFromFormat` <a name="resetFromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat"></a>

```typescript
public resetFromFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput">fromFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat">fromFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: B2BiTransformerInputConversionAdvancedOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: B2BiTransformerInputConversionFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput"></a>

```typescript
public readonly advancedOptionsInput: IResolvable | B2BiTransformerInputConversionAdvancedOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: IResolvable | B2BiTransformerInputConversionFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `fromFormatInput`<sup>Optional</sup> <a name="fromFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput"></a>

```typescript
public readonly fromFormatInput: string;
```

- *Type:* string

---

##### `fromFormat`<sup>Required</sup> <a name="fromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```typescript
public readonly fromFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerInputConversion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---


### B2BiTransformerMappingOutputReference <a name="B2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate">resetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage">resetTemplateLanguage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplate` <a name="resetTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate"></a>

```typescript
public resetTemplate(): void
```

##### `resetTemplateLanguage` <a name="resetTemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage"></a>

```typescript
public resetTemplateLanguage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput">templateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput">templateLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage">templateLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateInput`<sup>Optional</sup> <a name="templateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput"></a>

```typescript
public readonly templateInput: string;
```

- *Type:* string

---

##### `templateLanguageInput`<sup>Optional</sup> <a name="templateLanguageInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput"></a>

```typescript
public readonly templateLanguageInput: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `templateLanguage`<sup>Required</sup> <a name="templateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```typescript
public readonly templateLanguage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerMapping;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12"></a>

```typescript
public putX12(value: B2BiTransformerOutputConversionAdvancedOptionsX12): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12"></a>

```typescript
public resetX12(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input">x12Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```typescript
public readonly x12Input: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions">putSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions">putValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">resetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">resetValidationOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSplitOptions` <a name="putSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```typescript
public putSplitOptions(value: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `putValidationOptions` <a name="putValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```typescript
public putValidationOptions(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `resetSplitOptions` <a name="resetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```typescript
public resetSplitOptions(): void
```

##### `resetValidationOptions` <a name="resetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```typescript
public resetValidationOptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">splitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">validationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">splitOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">validationOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitOptions`<sup>Required</sup> <a name="splitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```typescript
public readonly splitOptions: B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `validationOptions`<sup>Required</sup> <a name="validationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```typescript
public readonly validationOptions: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `splitOptionsInput`<sup>Optional</sup> <a name="splitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```typescript
public readonly splitOptionsInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `validationOptionsInput`<sup>Optional</sup> <a name="validationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```typescript
public readonly validationOptionsInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">resetSplitBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSplitBy` <a name="resetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```typescript
public resetSplitBy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">splitByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">splitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitByInput`<sup>Optional</sup> <a name="splitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```typescript
public readonly splitByInput: string;
```

- *Type:* string

---

##### `splitBy`<sup>Required</sup> <a name="splitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```typescript
public readonly splitBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">putValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">resetValidationRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValidationRules` <a name="putValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```typescript
public putValidationRules(value: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `resetValidationRules` <a name="resetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```typescript
public resetValidationRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">validationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">validationRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `validationRules`<sup>Required</sup> <a name="validationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```typescript
public readonly validationRules: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `validationRulesInput`<sup>Optional</sup> <a name="validationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```typescript
public readonly validationRulesInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">resetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">resetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">resetElementId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCodesToAdd` <a name="resetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```typescript
public resetCodesToAdd(): void
```

##### `resetCodesToRemove` <a name="resetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```typescript
public resetCodesToRemove(): void
```

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```typescript
public resetElementId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">codesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">codesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">codesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">codesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codesToAddInput`<sup>Optional</sup> <a name="codesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```typescript
public readonly codesToAddInput: string[];
```

- *Type:* string[]

---

##### `codesToRemoveInput`<sup>Optional</sup> <a name="codesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```typescript
public readonly codesToRemoveInput: string[];
```

- *Type:* string[]

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `codesToAdd`<sup>Required</sup> <a name="codesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```typescript
public readonly codesToAdd: string[];
```

- *Type:* string[]

---

##### `codesToRemove`<sup>Required</sup> <a name="codesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```typescript
public readonly codesToRemove: string[];
```

- *Type:* string[]

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">resetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElementId` <a name="resetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```typescript
public resetElementId(): void
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```typescript
public resetMaxLength(): void
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```typescript
public resetMinLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">elementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">elementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">maxLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">minLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementIdInput`<sup>Optional</sup> <a name="elementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```typescript
public readonly elementIdInput: string;
```

- *Type:* string

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```typescript
public readonly maxLengthInput: number;
```

- *Type:* number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```typescript
public readonly minLengthInput: number;
```

- *Type:* number

---

##### `elementId`<sup>Required</sup> <a name="elementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```typescript
public readonly elementId: string;
```

- *Type:* string

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```typescript
public readonly maxLength: number;
```

- *Type:* number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```typescript
public readonly minLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">resetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">resetRequirement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetElementPosition` <a name="resetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```typescript
public resetElementPosition(): void
```

##### `resetRequirement` <a name="resetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```typescript
public resetRequirement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">elementPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">requirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">elementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `elementPositionInput`<sup>Optional</sup> <a name="elementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```typescript
public readonly elementPositionInput: string;
```

- *Type:* string

---

##### `requirementInput`<sup>Optional</sup> <a name="requirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```typescript
public readonly requirementInput: string;
```

- *Type:* string

---

##### `elementPosition`<sup>Required</sup> <a name="elementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```typescript
public readonly elementPosition: string;
```

- *Type:* string

---

##### `requirement`<sup>Required</sup> <a name="requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```typescript
public readonly requirement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```typescript
public get(index: number): B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">putCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">putElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">putElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">resetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">resetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">resetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeListValidationRule` <a name="putCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```typescript
public putCodeListValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `putElementLengthValidationRule` <a name="putElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```typescript
public putElementLengthValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `putElementRequirementValidationRule` <a name="putElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```typescript
public putElementRequirementValidationRule(value: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `resetCodeListValidationRule` <a name="resetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```typescript
public resetCodeListValidationRule(): void
```

##### `resetElementLengthValidationRule` <a name="resetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```typescript
public resetElementLengthValidationRule(): void
```

##### `resetElementRequirementValidationRule` <a name="resetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```typescript
public resetElementRequirementValidationRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">codeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">elementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">elementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">codeListValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">elementLengthValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">elementRequirementValidationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeListValidationRule`<sup>Required</sup> <a name="codeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```typescript
public readonly codeListValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `elementLengthValidationRule`<sup>Required</sup> <a name="elementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```typescript
public readonly elementLengthValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `elementRequirementValidationRule`<sup>Required</sup> <a name="elementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```typescript
public readonly elementRequirementValidationRule: B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `codeListValidationRuleInput`<sup>Optional</sup> <a name="codeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```typescript
public readonly codeListValidationRuleInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `elementLengthValidationRuleInput`<sup>Optional</sup> <a name="elementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```typescript
public readonly elementLengthValidationRuleInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `elementRequirementValidationRuleInput`<sup>Optional</sup> <a name="elementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```typescript
public readonly elementRequirementValidationRuleInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerOutputConversionFormatOptionsOutputReference <a name="B2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12"></a>

```typescript
public putX12(value: B2BiTransformerOutputConversionFormatOptionsX12): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12"></a>

```typescript
public resetX12(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input">x12Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```typescript
public readonly x12: B2BiTransformerOutputConversionFormatOptionsX12OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input"></a>

```typescript
public readonly x12Input: IResolvable | B2BiTransformerOutputConversionFormatOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---


### B2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet">resetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTransactionSet` <a name="resetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```typescript
public resetTransactionSet(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput">transactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">transactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `transactionSetInput`<sup>Optional</sup> <a name="transactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```typescript
public readonly transactionSetInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `transactionSet`<sup>Required</sup> <a name="transactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```typescript
public readonly transactionSet: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversionFormatOptionsX12;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---


### B2BiTransformerOutputConversionOutputReference <a name="B2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerOutputConversionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions">putAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions">resetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat">resetToFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdvancedOptions` <a name="putAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions"></a>

```typescript
public putAdvancedOptions(value: B2BiTransformerOutputConversionAdvancedOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions"></a>

```typescript
public putFormatOptions(value: B2BiTransformerOutputConversionFormatOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `resetAdvancedOptions` <a name="resetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions"></a>

```typescript
public resetAdvancedOptions(): void
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions"></a>

```typescript
public resetFormatOptions(): void
```

##### `resetToFormat` <a name="resetToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat"></a>

```typescript
public resetToFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions">advancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput">advancedOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput">formatOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput">toFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat">toFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: B2BiTransformerOutputConversionAdvancedOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: B2BiTransformerOutputConversionFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `advancedOptionsInput`<sup>Optional</sup> <a name="advancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput"></a>

```typescript
public readonly advancedOptionsInput: IResolvable | B2BiTransformerOutputConversionAdvancedOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput"></a>

```typescript
public readonly formatOptionsInput: IResolvable | B2BiTransformerOutputConversionFormatOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `toFormatInput`<sup>Optional</sup> <a name="toFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput"></a>

```typescript
public readonly toFormatInput: string;
```

- *Type:* string

---

##### `toFormat`<sup>Required</sup> <a name="toFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```typescript
public readonly toFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerOutputConversion;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---


### B2BiTransformerSampleDocumentsKeysList <a name="B2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerSampleDocumentsKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get"></a>

```typescript
public get(index: number): B2BiTransformerSampleDocumentsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerSampleDocumentsKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---


### B2BiTransformerSampleDocumentsKeysOutputReference <a name="B2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput">outputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerSampleDocumentsKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>

---


### B2BiTransformerSampleDocumentsOutputReference <a name="B2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys">putKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys">resetKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeys` <a name="putKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys"></a>

```typescript
public putKeys(value: IResolvable | B2BiTransformerSampleDocumentsKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetKeys` <a name="resetKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys"></a>

```typescript
public resetKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys">keys</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput">keysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```typescript
public readonly keys: B2BiTransformerSampleDocumentsKeysList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: IResolvable | B2BiTransformerSampleDocumentsKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerSampleDocuments;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---


### B2BiTransformerTagsList <a name="B2BiTransformerTagsList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get"></a>

```typescript
public get(index: number): B2BiTransformerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---


### B2BiTransformerTagsOutputReference <a name="B2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer"></a>

```typescript
import { b2BiTransformer } from '@cdktn/provider-awscc'

new b2BiTransformer.B2BiTransformerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiTransformerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>

---



