# `qbusinessWebExperience` Submodule <a name="`qbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.qbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessWebExperience <a name="QbusinessWebExperience" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperience(scope: Construct, id: string, config: QbusinessWebExperienceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig">QbusinessWebExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration">putBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration">putCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration">putIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration">resetBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration">resetCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration">resetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins">resetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode">resetSamplePromptsControlMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle">resetSubtitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage">resetWelcomeMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBrowserExtensionConfiguration` <a name="putBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration"></a>

```typescript
public putBrowserExtensionConfiguration(value: QbusinessWebExperienceBrowserExtensionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `putCustomizationConfiguration` <a name="putCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration"></a>

```typescript
public putCustomizationConfiguration(value: QbusinessWebExperienceCustomizationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `putIdentityProviderConfiguration` <a name="putIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration"></a>

```typescript
public putIdentityProviderConfiguration(value: QbusinessWebExperienceIdentityProviderConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags"></a>

```typescript
public putTags(value: IResolvable | QbusinessWebExperienceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---

##### `resetBrowserExtensionConfiguration` <a name="resetBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration"></a>

```typescript
public resetBrowserExtensionConfiguration(): void
```

##### `resetCustomizationConfiguration` <a name="resetCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration"></a>

```typescript
public resetCustomizationConfiguration(): void
```

##### `resetIdentityProviderConfiguration` <a name="resetIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration"></a>

```typescript
public resetIdentityProviderConfiguration(): void
```

##### `resetOrigins` <a name="resetOrigins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins"></a>

```typescript
public resetOrigins(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSamplePromptsControlMode` <a name="resetSamplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode"></a>

```typescript
public resetSamplePromptsControlMode(): void
```

##### `resetSubtitle` <a name="resetSubtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle"></a>

```typescript
public resetSubtitle(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle"></a>

```typescript
public resetTitle(): void
```

##### `resetWelcomeMessage` <a name="resetWelcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage"></a>

```typescript
public resetWelcomeMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

qbusinessWebExperience.QbusinessWebExperience.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

qbusinessWebExperience.QbusinessWebExperience.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

qbusinessWebExperience.QbusinessWebExperience.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QbusinessWebExperience to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration">browserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration">customizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint">defaultEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn">webExperienceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId">webExperienceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput">browserExtensionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput">customizationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput">identityProviderConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput">originsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput">samplePromptsControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput">subtitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput">welcomeMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins">origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode">samplePromptsControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle">subtitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage">welcomeMessage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `browserExtensionConfiguration`<sup>Required</sup> <a name="browserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration"></a>

```typescript
public readonly browserExtensionConfiguration: QbusinessWebExperienceBrowserExtensionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customizationConfiguration`<sup>Required</sup> <a name="customizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration"></a>

```typescript
public readonly customizationConfiguration: QbusinessWebExperienceCustomizationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `defaultEndpoint`<sup>Required</sup> <a name="defaultEndpoint" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint"></a>

```typescript
public readonly defaultEndpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: QbusinessWebExperienceIdentityProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags"></a>

```typescript
public readonly tags: QbusinessWebExperienceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `webExperienceArn`<sup>Required</sup> <a name="webExperienceArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn"></a>

```typescript
public readonly webExperienceArn: string;
```

- *Type:* string

---

##### `webExperienceId`<sup>Required</sup> <a name="webExperienceId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId"></a>

```typescript
public readonly webExperienceId: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `browserExtensionConfigurationInput`<sup>Optional</sup> <a name="browserExtensionConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput"></a>

```typescript
public readonly browserExtensionConfigurationInput: IResolvable | QbusinessWebExperienceBrowserExtensionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `customizationConfigurationInput`<sup>Optional</sup> <a name="customizationConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput"></a>

```typescript
public readonly customizationConfigurationInput: IResolvable | QbusinessWebExperienceCustomizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `identityProviderConfigurationInput`<sup>Optional</sup> <a name="identityProviderConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput"></a>

```typescript
public readonly identityProviderConfigurationInput: IResolvable | QbusinessWebExperienceIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput"></a>

```typescript
public readonly originsInput: string[];
```

- *Type:* string[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `samplePromptsControlModeInput`<sup>Optional</sup> <a name="samplePromptsControlModeInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput"></a>

```typescript
public readonly samplePromptsControlModeInput: string;
```

- *Type:* string

---

##### `subtitleInput`<sup>Optional</sup> <a name="subtitleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput"></a>

```typescript
public readonly subtitleInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QbusinessWebExperienceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `welcomeMessageInput`<sup>Optional</sup> <a name="welcomeMessageInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput"></a>

```typescript
public readonly welcomeMessageInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `samplePromptsControlMode`<sup>Required</sup> <a name="samplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode"></a>

```typescript
public readonly samplePromptsControlMode: string;
```

- *Type:* string

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle"></a>

```typescript
public readonly subtitle: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `welcomeMessage`<sup>Required</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage"></a>

```typescript
public readonly welcomeMessage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessWebExperienceBrowserExtensionConfiguration <a name="QbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceBrowserExtensionConfiguration: qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions">enabledBrowserExtensions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}. |

---

##### `enabledBrowserExtensions`<sup>Optional</sup> <a name="enabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions"></a>

```typescript
public readonly enabledBrowserExtensions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}.

---

### QbusinessWebExperienceConfig <a name="QbusinessWebExperienceConfig" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceConfig: qbusinessWebExperience.QbusinessWebExperienceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration">browserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration">customizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins">origins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode">samplePromptsControlMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle">subtitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage">welcomeMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}.

---

##### `browserExtensionConfiguration`<sup>Optional</sup> <a name="browserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration"></a>

```typescript
public readonly browserExtensionConfiguration: QbusinessWebExperienceBrowserExtensionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}.

---

##### `customizationConfiguration`<sup>Optional</sup> <a name="customizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration"></a>

```typescript
public readonly customizationConfiguration: QbusinessWebExperienceCustomizationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}.

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: QbusinessWebExperienceIdentityProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}.

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}.

---

##### `samplePromptsControlMode`<sup>Optional</sup> <a name="samplePromptsControlMode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode"></a>

```typescript
public readonly samplePromptsControlMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}.

---

##### `subtitle`<sup>Optional</sup> <a name="subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle"></a>

```typescript
public readonly subtitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QbusinessWebExperienceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}.

---

##### `welcomeMessage`<sup>Optional</sup> <a name="welcomeMessage" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage"></a>

```typescript
public readonly welcomeMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}.

---

### QbusinessWebExperienceCustomizationConfiguration <a name="QbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceCustomizationConfiguration: qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl">customCssUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl">faviconUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl">fontUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl">logoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}. |

---

##### `customCssUrl`<sup>Optional</sup> <a name="customCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl"></a>

```typescript
public readonly customCssUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}.

---

##### `faviconUrl`<sup>Optional</sup> <a name="faviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl"></a>

```typescript
public readonly faviconUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}.

---

##### `fontUrl`<sup>Optional</sup> <a name="fontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl"></a>

```typescript
public readonly fontUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}.

---

##### `logoUrl`<sup>Optional</sup> <a name="logoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}.

---

### QbusinessWebExperienceIdentityProviderConfiguration <a name="QbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceIdentityProviderConfiguration: qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}. |

---

##### `openIdConnectConfiguration`<sup>Optional</sup> <a name="openIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration"></a>

```typescript
public readonly openIdConnectConfiguration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}.

---

##### `samlConfiguration`<sup>Optional</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}.

---

### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration: qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn">secretsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole">secretsRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}. |

---

##### `secretsArn`<sup>Optional</sup> <a name="secretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn"></a>

```typescript
public readonly secretsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}.

---

##### `secretsRole`<sup>Optional</sup> <a name="secretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole"></a>

```typescript
public readonly secretsRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}.

---

### QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration: qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl">authenticationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}. |

---

##### `authenticationUrl`<sup>Optional</sup> <a name="authenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl"></a>

```typescript
public readonly authenticationUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}.

---

### QbusinessWebExperienceTags <a name="QbusinessWebExperienceTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

const qbusinessWebExperienceTags: qbusinessWebExperience.QbusinessWebExperienceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="QbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions">resetEnabledBrowserExtensions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledBrowserExtensions` <a name="resetEnabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions"></a>

```typescript
public resetEnabledBrowserExtensions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput">enabledBrowserExtensionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">enabledBrowserExtensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledBrowserExtensionsInput`<sup>Optional</sup> <a name="enabledBrowserExtensionsInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput"></a>

```typescript
public readonly enabledBrowserExtensionsInput: string[];
```

- *Type:* string[]

---

##### `enabledBrowserExtensions`<sup>Required</sup> <a name="enabledBrowserExtensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```typescript
public readonly enabledBrowserExtensions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceBrowserExtensionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---


### QbusinessWebExperienceCustomizationConfigurationOutputReference <a name="QbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl">resetCustomCssUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl">resetFaviconUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl">resetFontUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl">resetLogoUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomCssUrl` <a name="resetCustomCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl"></a>

```typescript
public resetCustomCssUrl(): void
```

##### `resetFaviconUrl` <a name="resetFaviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl"></a>

```typescript
public resetFaviconUrl(): void
```

##### `resetFontUrl` <a name="resetFontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl"></a>

```typescript
public resetFontUrl(): void
```

##### `resetLogoUrl` <a name="resetLogoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl"></a>

```typescript
public resetLogoUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput">customCssUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput">faviconUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput">fontUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput">logoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">customCssUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">faviconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">fontUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">logoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customCssUrlInput`<sup>Optional</sup> <a name="customCssUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput"></a>

```typescript
public readonly customCssUrlInput: string;
```

- *Type:* string

---

##### `faviconUrlInput`<sup>Optional</sup> <a name="faviconUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput"></a>

```typescript
public readonly faviconUrlInput: string;
```

- *Type:* string

---

##### `fontUrlInput`<sup>Optional</sup> <a name="fontUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput"></a>

```typescript
public readonly fontUrlInput: string;
```

- *Type:* string

---

##### `logoUrlInput`<sup>Optional</sup> <a name="logoUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput"></a>

```typescript
public readonly logoUrlInput: string;
```

- *Type:* string

---

##### `customCssUrl`<sup>Required</sup> <a name="customCssUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```typescript
public readonly customCssUrl: string;
```

- *Type:* string

---

##### `faviconUrl`<sup>Required</sup> <a name="faviconUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```typescript
public readonly faviconUrl: string;
```

- *Type:* string

---

##### `fontUrl`<sup>Required</sup> <a name="fontUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```typescript
public readonly fontUrl: string;
```

- *Type:* string

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```typescript
public readonly logoUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceCustomizationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn">resetSecretsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole">resetSecretsRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsArn` <a name="resetSecretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn"></a>

```typescript
public resetSecretsArn(): void
```

##### `resetSecretsRole` <a name="resetSecretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole"></a>

```typescript
public resetSecretsRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput">secretsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput">secretsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">secretsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">secretsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretsArnInput`<sup>Optional</sup> <a name="secretsArnInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput"></a>

```typescript
public readonly secretsArnInput: string;
```

- *Type:* string

---

##### `secretsRoleInput`<sup>Optional</sup> <a name="secretsRoleInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput"></a>

```typescript
public readonly secretsRoleInput: string;
```

- *Type:* string

---

##### `secretsArn`<sup>Required</sup> <a name="secretsArn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```typescript
public readonly secretsArn: string;
```

- *Type:* string

---

##### `secretsRole`<sup>Required</sup> <a name="secretsRole" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```typescript
public readonly secretsRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration">putOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration">putSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration">resetOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration">resetSamlConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenIdConnectConfiguration` <a name="putOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```typescript
public putOpenIdConnectConfiguration(value: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `putSamlConfiguration` <a name="putSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration"></a>

```typescript
public putSamlConfiguration(value: QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `resetOpenIdConnectConfiguration` <a name="resetOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```typescript
public resetOpenIdConnectConfiguration(): void
```

##### `resetSamlConfiguration` <a name="resetSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration"></a>

```typescript
public resetSamlConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">openIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">samlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput">openIdConnectConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput">samlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `openIdConnectConfiguration`<sup>Required</sup> <a name="openIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```typescript
public readonly openIdConnectConfiguration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `samlConfiguration`<sup>Required</sup> <a name="samlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```typescript
public readonly samlConfiguration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `openIdConnectConfigurationInput`<sup>Optional</sup> <a name="openIdConnectConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```typescript
public readonly openIdConnectConfigurationInput: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `samlConfigurationInput`<sup>Optional</sup> <a name="samlConfigurationInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput"></a>

```typescript
public readonly samlConfigurationInput: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl">resetAuthenticationUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationUrl` <a name="resetAuthenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl"></a>

```typescript
public resetAuthenticationUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput">authenticationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">authenticationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationUrlInput`<sup>Optional</sup> <a name="authenticationUrlInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput"></a>

```typescript
public readonly authenticationUrlInput: string;
```

- *Type:* string

---

##### `authenticationUrl`<sup>Required</sup> <a name="authenticationUrl" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```typescript
public readonly authenticationUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---


### QbusinessWebExperienceTagsList <a name="QbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get"></a>

```typescript
public get(index: number): QbusinessWebExperienceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>[]

---


### QbusinessWebExperienceTagsOutputReference <a name="QbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer"></a>

```typescript
import { qbusinessWebExperience } from '@cdktn/provider-awscc'

new qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QbusinessWebExperienceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>

---



