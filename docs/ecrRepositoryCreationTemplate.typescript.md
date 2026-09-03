# `ecrRepositoryCreationTemplate` Submodule <a name="`ecrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepositoryCreationTemplate <a name="EcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate(scope: Construct, id: string, config: EcrRepositoryCreationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters">putImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn">resetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability">resetImageTagMutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters">resetImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy">resetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy">resetRepositoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: EcrRepositoryCreationTemplateEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `putImageTagMutabilityExclusionFilters` <a name="putImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters"></a>

```typescript
public putImageTagMutabilityExclusionFilters(value: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | EcrRepositoryCreationTemplateResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---

##### `resetCustomRoleArn` <a name="resetCustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn"></a>

```typescript
public resetCustomRoleArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetImageTagMutability` <a name="resetImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability"></a>

```typescript
public resetImageTagMutability(): void
```

##### `resetImageTagMutabilityExclusionFilters` <a name="resetImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters"></a>

```typescript
public resetImageTagMutabilityExclusionFilters(): void
```

##### `resetLifecyclePolicy` <a name="resetLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy"></a>

```typescript
public resetLifecyclePolicy(): void
```

##### `resetRepositoryPolicy` <a name="resetRepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy"></a>

```typescript
public resetRepositoryPolicy(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrRepositoryCreationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">imageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput">appliedForInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput">customRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput">imageTagMutabilityExclusionFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput">imageTagMutabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput">lifecyclePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput">repositoryPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor">appliedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn">customRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability">imageTagMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy">repositoryPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="imageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```typescript
public readonly imageTagMutabilityExclusionFilters: EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags"></a>

```typescript
public readonly resourceTags: EcrRepositoryCreationTemplateResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `appliedForInput`<sup>Optional</sup> <a name="appliedForInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput"></a>

```typescript
public readonly appliedForInput: string[];
```

- *Type:* string[]

---

##### `customRoleArnInput`<sup>Optional</sup> <a name="customRoleArnInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput"></a>

```typescript
public readonly customRoleArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | EcrRepositoryCreationTemplateEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `imageTagMutabilityExclusionFiltersInput`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFiltersInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput"></a>

```typescript
public readonly imageTagMutabilityExclusionFiltersInput: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---

##### `imageTagMutabilityInput`<sup>Optional</sup> <a name="imageTagMutabilityInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput"></a>

```typescript
public readonly imageTagMutabilityInput: string;
```

- *Type:* string

---

##### `lifecyclePolicyInput`<sup>Optional</sup> <a name="lifecyclePolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput"></a>

```typescript
public readonly lifecyclePolicyInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `repositoryPolicyInput`<sup>Optional</sup> <a name="repositoryPolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput"></a>

```typescript
public readonly repositoryPolicyInput: string;
```

- *Type:* string

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | EcrRepositoryCreationTemplateResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---

##### `appliedFor`<sup>Required</sup> <a name="appliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor"></a>

```typescript
public readonly appliedFor: string[];
```

- *Type:* string[]

---

##### `customRoleArn`<sup>Required</sup> <a name="customRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn"></a>

```typescript
public readonly customRoleArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `imageTagMutability`<sup>Required</sup> <a name="imageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: string;
```

- *Type:* string

---

##### `lifecyclePolicy`<sup>Required</sup> <a name="lifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `repositoryPolicy`<sup>Required</sup> <a name="repositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```typescript
public readonly repositoryPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryCreationTemplateConfig <a name="EcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

const ecrRepositoryCreationTemplateConfig: ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor">appliedFor</a></code> | <code>string[]</code> | A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix">prefix</a></code> | <code>string</code> | The repository namespace prefix associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn">customRoleArn</a></code> | <code>string</code> | The ARN of the role to be assumed by Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description">description</a></code> | <code>string</code> | The description associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | The encryption configuration associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability">imageTagMutability</a></code> | <code>string</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters">imageTagMutabilityExclusionFilters</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy">lifecyclePolicy</a></code> | <code>string</code> | The lifecycle policy to use for repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy">repositoryPolicy</a></code> | <code>string</code> | The repository policy to apply to repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags">resourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | The metadata to apply to the repository to help you categorize and organize. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appliedFor`<sup>Required</sup> <a name="appliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor"></a>

```typescript
public readonly appliedFor: string[];
```

- *Type:* string[]

A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.

The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The repository namespace prefix associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}

---

##### `customRoleArn`<sup>Optional</sup> <a name="customRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn"></a>

```typescript
public readonly customRoleArn: string;
```

- *Type:* string

The ARN of the role to be assumed by Amazon ECR.

Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: EcrRepositoryCreationTemplateEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

The encryption configuration associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `imageTagMutability`<sup>Optional</sup> <a name="imageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability"></a>

```typescript
public readonly imageTagMutability: string;
```

- *Type:* string

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}

---

##### `imageTagMutabilityExclusionFilters`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters"></a>

```typescript
public readonly imageTagMutabilityExclusionFilters: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}

---

##### `lifecyclePolicy`<sup>Optional</sup> <a name="lifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy"></a>

```typescript
public readonly lifecyclePolicy: string;
```

- *Type:* string

The lifecycle policy to use for repositories created using the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}

---

##### `repositoryPolicy`<sup>Optional</sup> <a name="repositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy"></a>

```typescript
public readonly repositoryPolicy: string;
```

- *Type:* string

The repository policy to apply to repositories created using the template.

A repository policy is a permissions policy associated with a repository to control access permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | EcrRepositoryCreationTemplateResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

The metadata to apply to the repository to help you categorize and organize.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}

---

### EcrRepositoryCreationTemplateEncryptionConfiguration <a name="EcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

const ecrRepositoryCreationTemplateEncryptionConfiguration: ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType">encryptionType</a></code> | <code>string</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey">kmsKey</a></code> | <code>string</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `encryptionType`<sup>Optional</sup> <a name="encryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

The encryption type to use.

If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
 If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. 
 If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
 For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}

---

### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

const ecrRepositoryCreationTemplateImageTagMutabilityExclusionFilters: ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">imageTagMutabilityExclusionFilterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">imageTagMutabilityExclusionFilterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}. |

---

##### `imageTagMutabilityExclusionFilterType`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}.

---

##### `imageTagMutabilityExclusionFilterValue`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}.

---

### EcrRepositoryCreationTemplateResourceTags <a name="EcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

const ecrRepositoryCreationTemplateResourceTags: ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key">key</a></code> | <code>string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value">value</a></code> | <code>string</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

One part of a key-value pair that make up a tag.

A ``key`` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#key EcrRepositoryCreationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ecr_repository_creation_template#value EcrRepositoryCreationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType">resetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionType` <a name="resetEncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```typescript
public resetEncryptionType(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryCreationTemplateEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```typescript
public get(index: number): EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>[]

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">resetImageTagMutabilityExclusionFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">resetImageTagMutabilityExclusionFilterValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetImageTagMutabilityExclusionFilterType` <a name="resetImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```typescript
public resetImageTagMutabilityExclusionFilterType(): void
```

##### `resetImageTagMutabilityExclusionFilterValue` <a name="resetImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```typescript
public resetImageTagMutabilityExclusionFilterValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">imageTagMutabilityExclusionFilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">imageTagMutabilityExclusionFilterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">imageTagMutabilityExclusionFilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">imageTagMutabilityExclusionFilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageTagMutabilityExclusionFilterTypeInput`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFilterTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterTypeInput: string;
```

- *Type:* string

---

##### `imageTagMutabilityExclusionFilterValueInput`<sup>Optional</sup> <a name="imageTagMutabilityExclusionFilterValueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterValueInput: string;
```

- *Type:* string

---

##### `imageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="imageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterType: string;
```

- *Type:* string

---

##### `imageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="imageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```typescript
public readonly imageTagMutabilityExclusionFilterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters</a>

---


### EcrRepositoryCreationTemplateResourceTagsList <a name="EcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get"></a>

```typescript
public get(index: number): EcrRepositoryCreationTemplateResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryCreationTemplateResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>[]

---


### EcrRepositoryCreationTemplateResourceTagsOutputReference <a name="EcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```typescript
import { ecrRepositoryCreationTemplate } from '@cdktn/provider-awscc'

new ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrRepositoryCreationTemplateResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags">EcrRepositoryCreationTemplateResourceTags</a>

---



