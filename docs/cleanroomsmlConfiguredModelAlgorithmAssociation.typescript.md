# `cleanroomsmlConfiguredModelAlgorithmAssociation` Submodule <a name="`cleanroomsmlConfiguredModelAlgorithmAssociation` Submodule" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociation <a name="CleanroomsmlConfiguredModelAlgorithmAssociation" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association awscc_cleanroomsml_configured_model_algorithm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation(scope: Construct, id: string, config: CleanroomsmlConfiguredModelAlgorithmAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig">CleanroomsmlConfiguredModelAlgorithmAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig">CleanroomsmlConfiguredModelAlgorithmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration">putPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetPrivacyConfiguration">resetPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivacyConfiguration` <a name="putPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration"></a>

```typescript
public putPrivacyConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putPrivacyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPrivacyConfiguration` <a name="resetPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetPrivacyConfiguration"></a>

```typescript
public resetPrivacyConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsmlConfiguredModelAlgorithmAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsmlConfiguredModelAlgorithmAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsmlConfiguredModelAlgorithmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsmlConfiguredModelAlgorithmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn">configuredModelAlgorithmAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration">privacyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList">CleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArnInput">configuredModelAlgorithmArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifierInput">membershipIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfigurationInput">privacyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn">configuredModelAlgorithmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `configuredModelAlgorithmAssociationArn`<sup>Required</sup> <a name="configuredModelAlgorithmAssociationArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmAssociationArn"></a>

```typescript
public readonly configuredModelAlgorithmAssociationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privacyConfiguration`<sup>Required</sup> <a name="privacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfiguration"></a>

```typescript
public readonly privacyConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tags"></a>

```typescript
public readonly tags: CleanroomsmlConfiguredModelAlgorithmAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList">CleanroomsmlConfiguredModelAlgorithmAssociationTagsList</a>

---

##### `configuredModelAlgorithmArnInput`<sup>Optional</sup> <a name="configuredModelAlgorithmArnInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArnInput"></a>

```typescript
public readonly configuredModelAlgorithmArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `membershipIdentifierInput`<sup>Optional</sup> <a name="membershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifierInput"></a>

```typescript
public readonly membershipIdentifierInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privacyConfigurationInput`<sup>Optional</sup> <a name="privacyConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.privacyConfigurationInput"></a>

```typescript
public readonly privacyConfigurationInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---

##### `configuredModelAlgorithmArn`<sup>Required</sup> <a name="configuredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.configuredModelAlgorithmArn"></a>

```typescript
public readonly configuredModelAlgorithmArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociationConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationConfig: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.configuredModelAlgorithmArn">configuredModelAlgorithmArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CleanroomsmlConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CleanroomsmlConfiguredModelAlgorithmAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#name CleanroomsmlConfiguredModelAlgorithmAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#description CleanroomsmlConfiguredModelAlgorithmAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.privacyConfiguration">privacyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#privacy_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configuredModelAlgorithmArn`<sup>Required</sup> <a name="configuredModelAlgorithmArn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.configuredModelAlgorithmArn"></a>

```typescript
public readonly configuredModelAlgorithmArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#configured_model_algorithm_arn CleanroomsmlConfiguredModelAlgorithmAssociation#configured_model_algorithm_arn}.

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#membership_identifier CleanroomsmlConfiguredModelAlgorithmAssociation#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#name CleanroomsmlConfiguredModelAlgorithmAssociation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#description CleanroomsmlConfiguredModelAlgorithmAssociation#description}.

---

##### `privacyConfiguration`<sup>Optional</sup> <a name="privacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.privacyConfiguration"></a>

```typescript
public readonly privacyConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#privacy_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#privacy_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#tags CleanroomsmlConfiguredModelAlgorithmAssociation#tags}

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CleanroomsmlConfiguredModelAlgorithmAssociation#policies}. |

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration.property.policies"></a>

```typescript
public readonly policies: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#policies CleanroomsmlConfiguredModelAlgorithmAssociation#policies}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelExports">trainedModelExports</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_exports}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelInferenceJobs">trainedModelInferenceJobs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModels">trainedModels</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CleanroomsmlConfiguredModelAlgorithmAssociation#trained_models}. |

---

##### `trainedModelExports`<sup>Optional</sup> <a name="trainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelExports"></a>

```typescript
public readonly trainedModelExports: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_exports CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_exports}.

---

##### `trainedModelInferenceJobs`<sup>Optional</sup> <a name="trainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModelInferenceJobs"></a>

```typescript
public readonly trainedModelInferenceJobs: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_model_inference_jobs CleanroomsmlConfiguredModelAlgorithmAssociation#trained_model_inference_jobs}.

---

##### `trainedModels`<sup>Optional</sup> <a name="trainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies.property.trainedModels"></a>

```typescript
public readonly trainedModels: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#trained_models CleanroomsmlConfiguredModelAlgorithmAssociation#trained_models}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.filesToExport">filesToExport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CleanroomsmlConfiguredModelAlgorithmAssociation#files_to_export}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.maxSize">maxSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_size}. |

---

##### `filesToExport`<sup>Optional</sup> <a name="filesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.filesToExport"></a>

```typescript
public readonly filesToExport: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#files_to_export CleanroomsmlConfiguredModelAlgorithmAssociation#files_to_export}.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports.property.maxSize"></a>

```typescript
public readonly maxSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.containerLogs">containerLogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.maxOutputSize">maxOutputSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_output_size}. |

---

##### `containerLogs`<sup>Optional</sup> <a name="containerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.containerLogs"></a>

```typescript
public readonly containerLogs: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}.

---

##### `maxOutputSize`<sup>Optional</sup> <a name="maxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs.property.maxOutputSize"></a>

```typescript
public readonly maxOutputSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_output_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_output_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.filterPattern">filterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logRedactionConfiguration">logRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}. |

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}.

---

##### `logRedactionConfiguration`<sup>Optional</sup> <a name="logRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logRedactionConfiguration"></a>

```typescript
public readonly logRedactionConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.customEntityConfig">customEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.entitiesToRedact">entitiesToRedact</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}. |

---

##### `customEntityConfig`<sup>Optional</sup> <a name="customEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.customEntityConfig"></a>

```typescript
public readonly customEntityConfig: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}.

---

##### `entitiesToRedact`<sup>Optional</sup> <a name="entitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration.property.entitiesToRedact"></a>

```typescript
public readonly entitiesToRedact: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers">customDataIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}. |

---

##### `customDataIdentifiers`<sup>Optional</sup> <a name="customDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers"></a>

```typescript
public readonly customDataIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerLogs">containerLogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerMetrics">containerMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CleanroomsmlConfiguredModelAlgorithmAssociation#container_metrics}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.maxArtifactSize">maxArtifactSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_artifact_size}. |

---

##### `containerLogs`<sup>Optional</sup> <a name="containerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerLogs"></a>

```typescript
public readonly containerLogs: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_logs CleanroomsmlConfiguredModelAlgorithmAssociation#container_logs}.

---

##### `containerMetrics`<sup>Optional</sup> <a name="containerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.containerMetrics"></a>

```typescript
public readonly containerMetrics: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#container_metrics CleanroomsmlConfiguredModelAlgorithmAssociation#container_metrics}.

---

##### `maxArtifactSize`<sup>Optional</sup> <a name="maxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels.property.maxArtifactSize"></a>

```typescript
public readonly maxArtifactSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#max_artifact_size CleanroomsmlConfiguredModelAlgorithmAssociation#max_artifact_size}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.filterPattern">filterPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logRedactionConfiguration">logRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}. |

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#allowed_account_ids CleanroomsmlConfiguredModelAlgorithmAssociation#allowed_account_ids}.

---

##### `filterPattern`<sup>Optional</sup> <a name="filterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#filter_pattern CleanroomsmlConfiguredModelAlgorithmAssociation#filter_pattern}.

---

##### `logRedactionConfiguration`<sup>Optional</sup> <a name="logRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logRedactionConfiguration"></a>

```typescript
public readonly logRedactionConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_redaction_configuration CleanroomsmlConfiguredModelAlgorithmAssociation#log_redaction_configuration}.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#log_type CleanroomsmlConfiguredModelAlgorithmAssociation#log_type}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.customEntityConfig">customEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.entitiesToRedact">entitiesToRedact</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}. |

---

##### `customEntityConfig`<sup>Optional</sup> <a name="customEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.customEntityConfig"></a>

```typescript
public readonly customEntityConfig: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_entity_config CleanroomsmlConfiguredModelAlgorithmAssociation#custom_entity_config}.

---

##### `entitiesToRedact`<sup>Optional</sup> <a name="entitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration.property.entitiesToRedact"></a>

```typescript
public readonly entitiesToRedact: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#entities_to_redact CleanroomsmlConfiguredModelAlgorithmAssociation#entities_to_redact}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers">customDataIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}. |

---

##### `customDataIdentifiers`<sup>Optional</sup> <a name="customDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig.property.customDataIdentifiers"></a>

```typescript
public readonly customDataIdentifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#custom_data_identifiers CleanroomsmlConfiguredModelAlgorithmAssociation#custom_data_identifiers}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.property.noiseLevel">noiseLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CleanroomsmlConfiguredModelAlgorithmAssociation#noise_level}. |

---

##### `noiseLevel`<sup>Optional</sup> <a name="noiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics.property.noiseLevel"></a>

```typescript
public readonly noiseLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#noise_level CleanroomsmlConfiguredModelAlgorithmAssociation#noise_level}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#unit CleanroomsmlConfiguredModelAlgorithmAssociation#unit}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

### CleanroomsmlConfiguredModelAlgorithmAssociationTags <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTags" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

const cleanroomsmlConfiguredModelAlgorithmAssociationTags: cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#key CleanroomsmlConfiguredModelAlgorithmAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#key CleanroomsmlConfiguredModelAlgorithmAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cleanroomsml_configured_model_algorithm_association#value CleanroomsmlConfiguredModelAlgorithmAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies"></a>

```typescript
public putPolicies(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.putPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.resetPolicies"></a>

```typescript
public resetPolicies(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policiesInput">policiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policies"></a>

```typescript
public readonly policies: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference</a>

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports">putTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs">putTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels">putTrainedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelExports">resetTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelInferenceJobs">resetTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModels">resetTrainedModels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrainedModelExports` <a name="putTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports"></a>

```typescript
public putTrainedModelExports(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelExports.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---

##### `putTrainedModelInferenceJobs` <a name="putTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs"></a>

```typescript
public putTrainedModelInferenceJobs(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModelInferenceJobs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---

##### `putTrainedModels` <a name="putTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels"></a>

```typescript
public putTrainedModels(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.putTrainedModels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---

##### `resetTrainedModelExports` <a name="resetTrainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelExports"></a>

```typescript
public resetTrainedModelExports(): void
```

##### `resetTrainedModelInferenceJobs` <a name="resetTrainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModelInferenceJobs"></a>

```typescript
public resetTrainedModelInferenceJobs(): void
```

##### `resetTrainedModels` <a name="resetTrainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.resetTrainedModels"></a>

```typescript
public resetTrainedModels(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports">trainedModelExports</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs">trainedModelInferenceJobs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels">trainedModels</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExportsInput">trainedModelExportsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobsInput">trainedModelInferenceJobsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelsInput">trainedModelsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trainedModelExports`<sup>Required</sup> <a name="trainedModelExports" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExports"></a>

```typescript
public readonly trainedModelExports: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference</a>

---

##### `trainedModelInferenceJobs`<sup>Required</sup> <a name="trainedModelInferenceJobs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobs"></a>

```typescript
public readonly trainedModelInferenceJobs: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference</a>

---

##### `trainedModels`<sup>Required</sup> <a name="trainedModels" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModels"></a>

```typescript
public readonly trainedModels: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference</a>

---

##### `trainedModelExportsInput`<sup>Optional</sup> <a name="trainedModelExportsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelExportsInput"></a>

```typescript
public readonly trainedModelExportsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---

##### `trainedModelInferenceJobsInput`<sup>Optional</sup> <a name="trainedModelInferenceJobsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelInferenceJobsInput"></a>

```typescript
public readonly trainedModelInferenceJobsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---

##### `trainedModelsInput`<sup>Optional</sup> <a name="trainedModelsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.trainedModelsInput"></a>

```typescript
public readonly trainedModelsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPolicies</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize">putMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetFilesToExport">resetFilesToExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetMaxSize">resetMaxSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxSize` <a name="putMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize"></a>

```typescript
public putMaxSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.putMaxSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---

##### `resetFilesToExport` <a name="resetFilesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetFilesToExport"></a>

```typescript
public resetFilesToExport(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize">maxSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExportInput">filesToExportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport">filesToExport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSize"></a>

```typescript
public readonly maxSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSizeOutputReference</a>

---

##### `filesToExportInput`<sup>Optional</sup> <a name="filesToExportInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExportInput"></a>

```typescript
public readonly filesToExportInput: string[];
```

- *Type:* string[]

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsMaxSize</a>

---

##### `filesToExport`<sup>Required</sup> <a name="filesToExport" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.filesToExport"></a>

```typescript
public readonly filesToExport: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExportsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelExports</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get"></a>

```typescript
public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers">resetCustomDataIdentifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomDataIdentifiers` <a name="resetCustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers"></a>

```typescript
public resetCustomDataIdentifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput">customDataIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">customDataIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customDataIdentifiersInput`<sup>Optional</sup> <a name="customDataIdentifiersInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput"></a>

```typescript
public readonly customDataIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `customDataIdentifiers`<sup>Required</sup> <a name="customDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```typescript
public readonly customDataIdentifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig">putCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig">resetCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact">resetEntitiesToRedact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEntityConfig` <a name="putCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig"></a>

```typescript
public putCustomEntityConfig(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `resetCustomEntityConfig` <a name="resetCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig"></a>

```typescript
public resetCustomEntityConfig(): void
```

##### `resetEntitiesToRedact` <a name="resetEntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact"></a>

```typescript
public resetEntitiesToRedact(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">customEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput">customEntityConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput">entitiesToRedactInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">entitiesToRedact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEntityConfig`<sup>Required</sup> <a name="customEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```typescript
public readonly customEntityConfig: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `customEntityConfigInput`<sup>Optional</sup> <a name="customEntityConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput"></a>

```typescript
public readonly customEntityConfigInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `entitiesToRedactInput`<sup>Optional</sup> <a name="entitiesToRedactInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput"></a>

```typescript
public readonly entitiesToRedactInput: string[];
```

- *Type:* string[]

---

##### `entitiesToRedact`<sup>Required</sup> <a name="entitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```typescript
public readonly entitiesToRedact: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration">putLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetAllowedAccountIds">resetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogRedactionConfiguration">resetLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogRedactionConfiguration` <a name="putLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration"></a>

```typescript
public putLogRedactionConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.putLogRedactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---

##### `resetAllowedAccountIds` <a name="resetAllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetAllowedAccountIds"></a>

```typescript
public resetAllowedAccountIds(): void
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetFilterPattern"></a>

```typescript
public resetFilterPattern(): void
```

##### `resetLogRedactionConfiguration` <a name="resetLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogRedactionConfiguration"></a>

```typescript
public resetLogRedactionConfiguration(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration">logRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIdsInput">allowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfigurationInput">logRedactionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logRedactionConfiguration`<sup>Required</sup> <a name="logRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```typescript
public readonly logRedactionConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `allowedAccountIdsInput`<sup>Optional</sup> <a name="allowedAccountIdsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIdsInput"></a>

```typescript
public readonly allowedAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `logRedactionConfigurationInput`<sup>Optional</sup> <a name="logRedactionConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logRedactionConfigurationInput"></a>

```typescript
public readonly logRedactionConfigurationInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsLogRedactionConfiguration</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `allowedAccountIds`<sup>Required</sup> <a name="allowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs">putContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize">putMaxOutputSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetContainerLogs">resetContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetMaxOutputSize">resetMaxOutputSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerLogs` <a name="putContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs"></a>

```typescript
public putContainerLogs(value: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putContainerLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---

##### `putMaxOutputSize` <a name="putMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize"></a>

```typescript
public putMaxOutputSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.putMaxOutputSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---

##### `resetContainerLogs` <a name="resetContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetContainerLogs"></a>

```typescript
public resetContainerLogs(): void
```

##### `resetMaxOutputSize` <a name="resetMaxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.resetMaxOutputSize"></a>

```typescript
public resetMaxOutputSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs">containerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize">maxOutputSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogsInput">containerLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSizeInput">maxOutputSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerLogs`<sup>Required</sup> <a name="containerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogs"></a>

```typescript
public readonly containerLogs: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogsList</a>

---

##### `maxOutputSize`<sup>Required</sup> <a name="maxOutputSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSize"></a>

```typescript
public readonly maxOutputSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSizeOutputReference</a>

---

##### `containerLogsInput`<sup>Optional</sup> <a name="containerLogsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.containerLogsInput"></a>

```typescript
public readonly containerLogsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsContainerLogs</a>[]

---

##### `maxOutputSizeInput`<sup>Optional</sup> <a name="maxOutputSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.maxOutputSizeInput"></a>

```typescript
public readonly maxOutputSizeInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsMaxOutputSize</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelInferenceJobs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get"></a>

```typescript
public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers">resetCustomDataIdentifiers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomDataIdentifiers` <a name="resetCustomDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.resetCustomDataIdentifiers"></a>

```typescript
public resetCustomDataIdentifiers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput">customDataIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers">customDataIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customDataIdentifiersInput`<sup>Optional</sup> <a name="customDataIdentifiersInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiersInput"></a>

```typescript
public readonly customDataIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `customDataIdentifiers`<sup>Required</sup> <a name="customDataIdentifiers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.customDataIdentifiers"></a>

```typescript
public readonly customDataIdentifiers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig">putCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig">resetCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact">resetEntitiesToRedact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomEntityConfig` <a name="putCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig"></a>

```typescript
public putCustomEntityConfig(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.putCustomEntityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `resetCustomEntityConfig` <a name="resetCustomEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetCustomEntityConfig"></a>

```typescript
public resetCustomEntityConfig(): void
```

##### `resetEntitiesToRedact` <a name="resetEntitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.resetEntitiesToRedact"></a>

```typescript
public resetEntitiesToRedact(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig">customEntityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput">customEntityConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput">entitiesToRedactInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact">entitiesToRedact</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customEntityConfig`<sup>Required</sup> <a name="customEntityConfig" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfig"></a>

```typescript
public readonly customEntityConfig: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfigOutputReference</a>

---

##### `customEntityConfigInput`<sup>Optional</sup> <a name="customEntityConfigInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.customEntityConfigInput"></a>

```typescript
public readonly customEntityConfigInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationCustomEntityConfig</a>

---

##### `entitiesToRedactInput`<sup>Optional</sup> <a name="entitiesToRedactInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedactInput"></a>

```typescript
public readonly entitiesToRedactInput: string[];
```

- *Type:* string[]

---

##### `entitiesToRedact`<sup>Required</sup> <a name="entitiesToRedact" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.entitiesToRedact"></a>

```typescript
public readonly entitiesToRedact: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration">putLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetAllowedAccountIds">resetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetFilterPattern">resetFilterPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogRedactionConfiguration">resetLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogRedactionConfiguration` <a name="putLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration"></a>

```typescript
public putLogRedactionConfiguration(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.putLogRedactionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---

##### `resetAllowedAccountIds` <a name="resetAllowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetAllowedAccountIds"></a>

```typescript
public resetAllowedAccountIds(): void
```

##### `resetFilterPattern` <a name="resetFilterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetFilterPattern"></a>

```typescript
public resetFilterPattern(): void
```

##### `resetLogRedactionConfiguration` <a name="resetLogRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogRedactionConfiguration"></a>

```typescript
public resetLogRedactionConfiguration(): void
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.resetLogType"></a>

```typescript
public resetLogType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration">logRedactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIdsInput">allowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPatternInput">filterPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfigurationInput">logRedactionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern">filterPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logRedactionConfiguration`<sup>Required</sup> <a name="logRedactionConfiguration" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfiguration"></a>

```typescript
public readonly logRedactionConfiguration: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfigurationOutputReference</a>

---

##### `allowedAccountIdsInput`<sup>Optional</sup> <a name="allowedAccountIdsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIdsInput"></a>

```typescript
public readonly allowedAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `filterPatternInput`<sup>Optional</sup> <a name="filterPatternInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPatternInput"></a>

```typescript
public readonly filterPatternInput: string;
```

- *Type:* string

---

##### `logRedactionConfigurationInput`<sup>Optional</sup> <a name="logRedactionConfigurationInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logRedactionConfigurationInput"></a>

```typescript
public readonly logRedactionConfigurationInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsLogRedactionConfiguration</a>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `allowedAccountIds`<sup>Required</sup> <a name="allowedAccountIds" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

---

##### `filterPattern`<sup>Required</sup> <a name="filterPattern" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.filterPattern"></a>

```typescript
public readonly filterPattern: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resetNoiseLevel">resetNoiseLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoiseLevel` <a name="resetNoiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.resetNoiseLevel"></a>

```typescript
public resetNoiseLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevelInput">noiseLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel">noiseLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noiseLevelInput`<sup>Optional</sup> <a name="noiseLevelInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevelInput"></a>

```typescript
public readonly noiseLevelInput: string;
```

- *Type:* string

---

##### `noiseLevel`<sup>Required</sup> <a name="noiseLevel" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.noiseLevel"></a>

```typescript
public readonly noiseLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs">putContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics">putContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize">putMaxArtifactSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerLogs">resetContainerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerMetrics">resetContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetMaxArtifactSize">resetMaxArtifactSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerLogs` <a name="putContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs"></a>

```typescript
public putContainerLogs(value: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---

##### `putContainerMetrics` <a name="putContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics"></a>

```typescript
public putContainerMetrics(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putContainerMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---

##### `putMaxArtifactSize` <a name="putMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize"></a>

```typescript
public putMaxArtifactSize(value: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.putMaxArtifactSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---

##### `resetContainerLogs` <a name="resetContainerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerLogs"></a>

```typescript
public resetContainerLogs(): void
```

##### `resetContainerMetrics` <a name="resetContainerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetContainerMetrics"></a>

```typescript
public resetContainerMetrics(): void
```

##### `resetMaxArtifactSize` <a name="resetMaxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.resetMaxArtifactSize"></a>

```typescript
public resetMaxArtifactSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs">containerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics">containerMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize">maxArtifactSize</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogsInput">containerLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetricsInput">containerMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSizeInput">maxArtifactSizeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerLogs`<sup>Required</sup> <a name="containerLogs" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogs"></a>

```typescript
public readonly containerLogs: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogsList</a>

---

##### `containerMetrics`<sup>Required</sup> <a name="containerMetrics" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetrics"></a>

```typescript
public readonly containerMetrics: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetricsOutputReference</a>

---

##### `maxArtifactSize`<sup>Required</sup> <a name="maxArtifactSize" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSize"></a>

```typescript
public readonly maxArtifactSize: CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSizeOutputReference</a>

---

##### `containerLogsInput`<sup>Optional</sup> <a name="containerLogsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerLogsInput"></a>

```typescript
public readonly containerLogsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerLogs</a>[]

---

##### `containerMetricsInput`<sup>Optional</sup> <a name="containerMetricsInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.containerMetricsInput"></a>

```typescript
public readonly containerMetricsInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsContainerMetrics</a>

---

##### `maxArtifactSizeInput`<sup>Optional</sup> <a name="maxArtifactSizeInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.maxArtifactSizeInput"></a>

```typescript
public readonly maxArtifactSizeInput: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsMaxArtifactSize</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels">CleanroomsmlConfiguredModelAlgorithmAssociationPrivacyConfigurationPoliciesTrainedModels</a>

---


### CleanroomsmlConfiguredModelAlgorithmAssociationTagsList <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTagsList" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get"></a>

```typescript
public get(index: number): CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>[]

---


### CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference <a name="CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsmlConfiguredModelAlgorithmAssociation } from '@cdktn/provider-awscc'

new cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsmlConfiguredModelAlgorithmAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsmlConfiguredModelAlgorithmAssociation.CleanroomsmlConfiguredModelAlgorithmAssociationTags">CleanroomsmlConfiguredModelAlgorithmAssociationTags</a>

---



