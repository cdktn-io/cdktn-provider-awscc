# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktn/provider-awscc.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStack(scope: Construct, id: string, config?: AppstreamStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints">putAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig">putAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection">putContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors">putStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings">putStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints">resetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig">resetAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete">resetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection">resetContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors">resetDeleteStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains">resetEmbedHostDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl">resetFeedbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors">resetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings">resetStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessEndpoints` <a name="putAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```typescript
public putAccessEndpoints(value: IResolvable | AppstreamStackAccessEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `putAgentAccessConfig` <a name="putAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig"></a>

```typescript
public putAgentAccessConfig(value: AppstreamStackAgentAccessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```typescript
public putApplicationSettings(value: AppstreamStackApplicationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `putContentRedirection` <a name="putContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection"></a>

```typescript
public putContentRedirection(value: AppstreamStackContentRedirection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `putStorageConnectors` <a name="putStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```typescript
public putStorageConnectors(value: IResolvable | AppstreamStackStorageConnectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `putStreamingExperienceSettings` <a name="putStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings"></a>

```typescript
public putStreamingExperienceSettings(value: AppstreamStackStreamingExperienceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamStackTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings"></a>

```typescript
public putUserSettings(value: IResolvable | AppstreamStackUserSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `resetAccessEndpoints` <a name="resetAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```typescript
public resetAccessEndpoints(): void
```

##### `resetAgentAccessConfig` <a name="resetAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig"></a>

```typescript
public resetAgentAccessConfig(): void
```

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```typescript
public resetApplicationSettings(): void
```

##### `resetAttributesToDelete` <a name="resetAttributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete"></a>

```typescript
public resetAttributesToDelete(): void
```

##### `resetContentRedirection` <a name="resetContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection"></a>

```typescript
public resetContentRedirection(): void
```

##### `resetDeleteStorageConnectors` <a name="resetDeleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors"></a>

```typescript
public resetDeleteStorageConnectors(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEmbedHostDomains` <a name="resetEmbedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```typescript
public resetEmbedHostDomains(): void
```

##### `resetFeedbackUrl` <a name="resetFeedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```typescript
public resetFeedbackUrl(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```typescript
public resetRedirectUrl(): void
```

##### `resetStorageConnectors` <a name="resetStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```typescript
public resetStorageConnectors(): void
```

##### `resetStreamingExperienceSettings` <a name="resetStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings"></a>

```typescript
public resetStreamingExperienceSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings"></a>

```typescript
public resetUserSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

appstreamStack.AppstreamStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

appstreamStack.AppstreamStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

appstreamStack.AppstreamStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

appstreamStack.AppstreamStack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamStack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints">accessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig">agentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection">contentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors">storageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings">streamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput">accessEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput">agentAccessConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput">attributesToDeleteInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput">contentRedirectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput">deleteStorageConnectorsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput">embedHostDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput">feedbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput">redirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput">storageConnectorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput">streamingExperienceSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput">userSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors">deleteStorageConnectors</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains">embedHostDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl">feedbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessEndpoints`<sup>Required</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: AppstreamStackAccessEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `agentAccessConfig`<sup>Required</sup> <a name="agentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig"></a>

```typescript
public readonly agentAccessConfig: AppstreamStackAgentAccessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a>

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: AppstreamStackApplicationSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `contentRedirection`<sup>Required</sup> <a name="contentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection"></a>

```typescript
public readonly contentRedirection: AppstreamStackContentRedirectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `storageConnectors`<sup>Required</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: AppstreamStackStorageConnectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `streamingExperienceSettings`<sup>Required</sup> <a name="streamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings"></a>

```typescript
public readonly streamingExperienceSettings: AppstreamStackStreamingExperienceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags"></a>

```typescript
public readonly tags: AppstreamStackTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a>

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings"></a>

```typescript
public readonly userSettings: AppstreamStackUserSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `accessEndpointsInput`<sup>Optional</sup> <a name="accessEndpointsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```typescript
public readonly accessEndpointsInput: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `agentAccessConfigInput`<sup>Optional</sup> <a name="agentAccessConfigInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput"></a>

```typescript
public readonly agentAccessConfigInput: IResolvable | AppstreamStackAgentAccessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```typescript
public readonly applicationSettingsInput: IResolvable | AppstreamStackApplicationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `attributesToDeleteInput`<sup>Optional</sup> <a name="attributesToDeleteInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput"></a>

```typescript
public readonly attributesToDeleteInput: string[];
```

- *Type:* string[]

---

##### `contentRedirectionInput`<sup>Optional</sup> <a name="contentRedirectionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput"></a>

```typescript
public readonly contentRedirectionInput: IResolvable | AppstreamStackContentRedirection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `deleteStorageConnectorsInput`<sup>Optional</sup> <a name="deleteStorageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput"></a>

```typescript
public readonly deleteStorageConnectorsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `embedHostDomainsInput`<sup>Optional</sup> <a name="embedHostDomainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```typescript
public readonly embedHostDomainsInput: string[];
```

- *Type:* string[]

---

##### `feedbackUrlInput`<sup>Optional</sup> <a name="feedbackUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```typescript
public readonly feedbackUrlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```typescript
public readonly redirectUrlInput: string;
```

- *Type:* string

---

##### `storageConnectorsInput`<sup>Optional</sup> <a name="storageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```typescript
public readonly storageConnectorsInput: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `streamingExperienceSettingsInput`<sup>Optional</sup> <a name="streamingExperienceSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput"></a>

```typescript
public readonly streamingExperienceSettingsInput: IResolvable | AppstreamStackStreamingExperienceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```typescript
public readonly userSettingsInput: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `attributesToDelete`<sup>Required</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

---

##### `deleteStorageConnectors`<sup>Required</sup> <a name="deleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors"></a>

```typescript
public readonly deleteStorageConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `embedHostDomains`<sup>Required</sup> <a name="embedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```typescript
public readonly embedHostDomains: string[];
```

- *Type:* string[]

---

##### `feedbackUrl`<sup>Required</sup> <a name="feedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```typescript
public readonly feedbackUrl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackAccessEndpoints: appstreamStack.AppstreamStackAccessEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">endpointType</a></code> | <code>string</code> | The type of interface endpoint. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">vpceId</a></code> | <code>string</code> | The identifier (ID) of the VPC in which the interface endpoint is used. |

---

##### `endpointType`<sup>Optional</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}

---

##### `vpceId`<sup>Optional</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

The identifier (ID) of the VPC in which the interface endpoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}

---

### AppstreamStackAgentAccessConfig <a name="AppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackAgentAccessConfig: appstreamStack.AppstreamStackAgentAccessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat">screenImageFormat</a></code> | <code>string</code> | The image format for agent screen captures. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution">screenResolution</a></code> | <code>string</code> | The screen resolution for the agent streaming environment. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled">screenshotsUploadEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | The list of agent access settings that define permissions for each agent action. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode">userControlMode</a></code> | <code>string</code> | The user control mode for agent sessions. |

---

##### `s3BucketArn`<sup>Optional</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.

Required when ScreenshotsUploadEnabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#s3_bucket_arn AppstreamStack#s3_bucket_arn}

---

##### `screenImageFormat`<sup>Optional</sup> <a name="screenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat"></a>

```typescript
public readonly screenImageFormat: string;
```

- *Type:* string

The image format for agent screen captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#screen_image_format AppstreamStack#screen_image_format}

---

##### `screenResolution`<sup>Optional</sup> <a name="screenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution"></a>

```typescript
public readonly screenResolution: string;
```

- *Type:* string

The screen resolution for the agent streaming environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#screen_resolution AppstreamStack#screen_resolution}

---

##### `screenshotsUploadEnabled`<sup>Optional</sup> <a name="screenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled"></a>

```typescript
public readonly screenshotsUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#screenshots_upload_enabled AppstreamStack#screenshots_upload_enabled}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | AppstreamStackAgentAccessConfigSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

The list of agent access settings that define permissions for each agent action.

You must specify at least one setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#settings AppstreamStack#settings}

---

##### `userControlMode`<sup>Optional</sup> <a name="userControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode"></a>

```typescript
public readonly userControlMode: string;
```

- *Type:* string

The user control mode for agent sessions.

This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#user_control_mode AppstreamStack#user_control_mode}

---

### AppstreamStackAgentAccessConfigSettings <a name="AppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackAgentAccessConfigSettings: appstreamStack.AppstreamStackAgentAccessConfigSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction">agentAction</a></code> | <code>string</code> | The agent action to configure. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission">permission</a></code> | <code>string</code> | Whether the agent action is enabled or disabled. |

---

##### `agentAction`<sup>Optional</sup> <a name="agentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction"></a>

```typescript
public readonly agentAction: string;
```

- *Type:* string

The agent action to configure.

Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#agent_action AppstreamStack#agent_action}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Whether the agent action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackApplicationSettings: appstreamStack.AppstreamStackApplicationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables or disables persistent application settings for users during their streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | The path prefix for the S3 bucket where users' persistent application settings are stored. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables or disables persistent application settings for users during their streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

The path prefix for the S3 bucket where users' persistent application settings are stored.

You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackConfig: appstreamStack.AppstreamStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints">accessEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig">agentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete">attributesToDelete</a></code> | <code>string[]</code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection">contentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors">deleteStorageConnectors</a></code> | <code>boolean \| cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description">description</a></code> | <code>string</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName">displayName</a></code> | <code>string</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains">embedHostDomains</a></code> | <code>string[]</code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl">feedbackUrl</a></code> | <code>string</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name">name</a></code> | <code>string</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl">redirectUrl</a></code> | <code>string</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors">storageConnectors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings">streamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings">userSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessEndpoints`<sup>Optional</sup> <a name="accessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```typescript
public readonly accessEndpoints: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `agentAccessConfig`<sup>Optional</sup> <a name="agentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig"></a>

```typescript
public readonly agentAccessConfig: AppstreamStackAgentAccessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: AppstreamStackApplicationSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `attributesToDelete`<sup>Optional</sup> <a name="attributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete"></a>

```typescript
public readonly attributesToDelete: string[];
```

- *Type:* string[]

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `contentRedirection`<sup>Optional</sup> <a name="contentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection"></a>

```typescript
public readonly contentRedirection: AppstreamStackContentRedirection;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `deleteStorageConnectors`<sup>Optional</sup> <a name="deleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors"></a>

```typescript
public readonly deleteStorageConnectors: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `embedHostDomains`<sup>Optional</sup> <a name="embedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```typescript
public readonly embedHostDomains: string[];
```

- *Type:* string[]

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `feedbackUrl`<sup>Optional</sup> <a name="feedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```typescript
public readonly feedbackUrl: string;
```

- *Type:* string

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```typescript
public readonly redirectUrl: string;
```

- *Type:* string

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `storageConnectors`<sup>Optional</sup> <a name="storageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```typescript
public readonly storageConnectors: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `streamingExperienceSettings`<sup>Optional</sup> <a name="streamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings"></a>

```typescript
public readonly streamingExperienceSettings: AppstreamStackStreamingExperienceSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```typescript
public readonly userSettings: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackContentRedirection <a name="AppstreamStackContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackContentRedirection: appstreamStack.AppstreamStackContentRedirection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient">hostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | The URL redirection configuration from the streaming session host to the client. |

---

##### `hostToClient`<sup>Optional</sup> <a name="hostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient"></a>

```typescript
public readonly hostToClient: AppstreamStackContentRedirectionHostToClient;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

The URL redirection configuration from the streaming session host to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#host_to_client AppstreamStack#host_to_client}

---

### AppstreamStackContentRedirectionHostToClient <a name="AppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackContentRedirectionHostToClient: appstreamStack.AppstreamStackContentRedirectionHostToClient = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls">allowedUrls</a></code> | <code>string[]</code> | The URLs that are allowed for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls">deniedUrls</a></code> | <code>string[]</code> | The URLs that are denied for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether URL redirection is enabled or disabled. |

---

##### `allowedUrls`<sup>Optional</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls"></a>

```typescript
public readonly allowedUrls: string[];
```

- *Type:* string[]

The URLs that are allowed for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#allowed_urls AppstreamStack#allowed_urls}

---

##### `deniedUrls`<sup>Optional</sup> <a name="deniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls"></a>

```typescript
public readonly deniedUrls: string[];
```

- *Type:* string[]

The URLs that are denied for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#denied_urls AppstreamStack#denied_urls}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether URL redirection is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackStorageConnectors: appstreamStack.AppstreamStackStorageConnectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">connectorType</a></code> | <code>string</code> | The type of storage connector. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains">domains</a></code> | <code>string[]</code> | The names of the domains for the account. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | The ARN of the storage connector. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

The type of storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

The names of the domains for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#domains AppstreamStack#domains}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

The ARN of the storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}

---

### AppstreamStackStreamingExperienceSettings <a name="AppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackStreamingExperienceSettings: appstreamStack.AppstreamStackStreamingExperienceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol">preferredProtocol</a></code> | <code>string</code> | The preferred protocol that you want to use while streaming your application. |

---

##### `preferredProtocol`<sup>Optional</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol"></a>

```typescript
public readonly preferredProtocol: string;
```

- *Type:* string

The preferred protocol that you want to use while streaming your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}

---

### AppstreamStackTags <a name="AppstreamStackTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackTags: appstreamStack.AppstreamStackTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#key AppstreamStack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#value AppstreamStack#value}

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

const appstreamStackUserSettings: appstreamStack.AppstreamStackUserSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action">action</a></code> | <code>string</code> | The action that is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength">maximumLength</a></code> | <code>number</code> | Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission">permission</a></code> | <code>string</code> | Indicates whether the action is enabled or disabled. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The action that is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#action AppstreamStack#action}

---

##### `maximumLength`<sup>Optional</sup> <a name="maximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.

This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#maximum_length AppstreamStack#maximum_length}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Indicates whether the action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackAccessEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```typescript
public get(index: number): AppstreamStackAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAccessEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackAccessEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType">resetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">resetVpceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointType` <a name="resetEndpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType"></a>

```typescript
public resetEndpointType(): void
```

##### `resetVpceId` <a name="resetVpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```typescript
public resetVpceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">vpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">vpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `vpceIdInput`<sup>Optional</sup> <a name="vpceIdInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```typescript
public readonly vpceIdInput: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `vpceId`<sup>Required</sup> <a name="vpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```typescript
public readonly vpceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAccessEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>

---


### AppstreamStackAgentAccessConfigOutputReference <a name="AppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackAgentAccessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn">resetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat">resetScreenImageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution">resetScreenResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled">resetScreenshotsUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode">resetUserControlMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings"></a>

```typescript
public putSettings(value: IResolvable | AppstreamStackAgentAccessConfigSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---

##### `resetS3BucketArn` <a name="resetS3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn"></a>

```typescript
public resetS3BucketArn(): void
```

##### `resetScreenImageFormat` <a name="resetScreenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat"></a>

```typescript
public resetScreenImageFormat(): void
```

##### `resetScreenResolution` <a name="resetScreenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution"></a>

```typescript
public resetScreenResolution(): void
```

##### `resetScreenshotsUploadEnabled` <a name="resetScreenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled"></a>

```typescript
public resetScreenshotsUploadEnabled(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetUserControlMode` <a name="resetUserControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode"></a>

```typescript
public resetUserControlMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput">s3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput">screenImageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput">screenResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput">screenshotsUploadEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput">userControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">screenImageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution">screenResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">screenshotsUploadEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode">userControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```typescript
public readonly settings: AppstreamStackAgentAccessConfigSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a>

---

##### `s3BucketArnInput`<sup>Optional</sup> <a name="s3BucketArnInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput"></a>

```typescript
public readonly s3BucketArnInput: string;
```

- *Type:* string

---

##### `screenImageFormatInput`<sup>Optional</sup> <a name="screenImageFormatInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput"></a>

```typescript
public readonly screenImageFormatInput: string;
```

- *Type:* string

---

##### `screenResolutionInput`<sup>Optional</sup> <a name="screenResolutionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput"></a>

```typescript
public readonly screenResolutionInput: string;
```

- *Type:* string

---

##### `screenshotsUploadEnabledInput`<sup>Optional</sup> <a name="screenshotsUploadEnabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput"></a>

```typescript
public readonly screenshotsUploadEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | AppstreamStackAgentAccessConfigSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---

##### `userControlModeInput`<sup>Optional</sup> <a name="userControlModeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput"></a>

```typescript
public readonly userControlModeInput: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `screenImageFormat`<sup>Required</sup> <a name="screenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```typescript
public readonly screenImageFormat: string;
```

- *Type:* string

---

##### `screenResolution`<sup>Required</sup> <a name="screenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```typescript
public readonly screenResolution: string;
```

- *Type:* string

---

##### `screenshotsUploadEnabled`<sup>Required</sup> <a name="screenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```typescript
public readonly screenshotsUploadEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userControlMode`<sup>Required</sup> <a name="userControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```typescript
public readonly userControlMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAgentAccessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---


### AppstreamStackAgentAccessConfigSettingsList <a name="AppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackAgentAccessConfigSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get"></a>

```typescript
public get(index: number): AppstreamStackAgentAccessConfigSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAgentAccessConfigSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---


### AppstreamStackAgentAccessConfigSettingsOutputReference <a name="AppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction">resetAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgentAction` <a name="resetAgentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction"></a>

```typescript
public resetAgentAction(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput">agentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">agentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentActionInput`<sup>Optional</sup> <a name="agentActionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput"></a>

```typescript
public readonly agentActionInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `agentAction`<sup>Required</sup> <a name="agentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```typescript
public readonly agentAction: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackAgentAccessConfigSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackApplicationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```typescript
public resetSettingsGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```typescript
public readonly settingsGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackApplicationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackContentRedirectionHostToClientOutputReference <a name="AppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls">resetAllowedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls">resetDeniedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedUrls` <a name="resetAllowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls"></a>

```typescript
public resetAllowedUrls(): void
```

##### `resetDeniedUrls` <a name="resetDeniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls"></a>

```typescript
public resetDeniedUrls(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput">allowedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput">deniedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">allowedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">deniedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedUrlsInput`<sup>Optional</sup> <a name="allowedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput"></a>

```typescript
public readonly allowedUrlsInput: string[];
```

- *Type:* string[]

---

##### `deniedUrlsInput`<sup>Optional</sup> <a name="deniedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput"></a>

```typescript
public readonly deniedUrlsInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedUrls`<sup>Required</sup> <a name="allowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```typescript
public readonly allowedUrls: string[];
```

- *Type:* string[]

---

##### `deniedUrls`<sup>Required</sup> <a name="deniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```typescript
public readonly deniedUrls: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackContentRedirectionHostToClient;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---


### AppstreamStackContentRedirectionOutputReference <a name="AppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackContentRedirectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient">putHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient">resetHostToClient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostToClient` <a name="putHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient"></a>

```typescript
public putHostToClient(value: AppstreamStackContentRedirectionHostToClient): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `resetHostToClient` <a name="resetHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient"></a>

```typescript
public resetHostToClient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient">hostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput">hostToClientInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostToClient`<sup>Required</sup> <a name="hostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```typescript
public readonly hostToClient: AppstreamStackContentRedirectionHostToClientOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `hostToClientInput`<sup>Optional</sup> <a name="hostToClientInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput"></a>

```typescript
public readonly hostToClientInput: IResolvable | AppstreamStackContentRedirectionHostToClient;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackContentRedirection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackStorageConnectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```typescript
public get(index: number): AppstreamStackStorageConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackStorageConnectors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackStorageConnectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType"></a>

```typescript
public resetConnectorType(): void
```

##### `resetDomains` <a name="resetDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```typescript
public readonly connectorTypeInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackStorageConnectors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>

---


### AppstreamStackStreamingExperienceSettingsOutputReference <a name="AppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol">resetPreferredProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredProtocol` <a name="resetPreferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol"></a>

```typescript
public resetPreferredProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput">preferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">preferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredProtocolInput`<sup>Optional</sup> <a name="preferredProtocolInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput"></a>

```typescript
public readonly preferredProtocolInput: string;
```

- *Type:* string

---

##### `preferredProtocol`<sup>Required</sup> <a name="preferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```typescript
public readonly preferredProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackStreamingExperienceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---


### AppstreamStackTagsList <a name="AppstreamStackTagsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get"></a>

```typescript
public get(index: number): AppstreamStackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---


### AppstreamStackTagsOutputReference <a name="AppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackUserSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```typescript
public get(index: number): AppstreamStackUserSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackUserSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```typescript
import { appstreamStack } from '@cdktn/provider-awscc'

new appstreamStack.AppstreamStackUserSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength">resetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetMaximumLength` <a name="resetMaximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength"></a>

```typescript
public resetMaximumLength(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput">maximumLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength">maximumLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `maximumLengthInput`<sup>Optional</sup> <a name="maximumLengthInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput"></a>

```typescript
public readonly maximumLengthInput: number;
```

- *Type:* number

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `maximumLength`<sup>Required</sup> <a name="maximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```typescript
public readonly maximumLength: number;
```

- *Type:* number

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamStackUserSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>

---



