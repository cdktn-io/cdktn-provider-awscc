# `bedrockagentcoreBrowserCustom` Submodule <a name="`bedrockagentcoreBrowserCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreBrowserCustom <a name="BedrockagentcoreBrowserCustom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom awscc_bedrockagentcore_browser_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom(scope: Construct, id: string, config: BedrockagentcoreBrowserCustomConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig">BedrockagentcoreBrowserCustomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig">BedrockagentcoreBrowserCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning">putBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies">putEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig">putRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning">resetBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies">resetEnterprisePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig">resetRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBrowserSigning` <a name="putBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning"></a>

```typescript
public putBrowserSigning(value: BedrockagentcoreBrowserCustomBrowserSigning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putBrowserSigning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates"></a>

```typescript
public putCertificates(value: IResolvable | BedrockagentcoreBrowserCustomCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putCertificates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---

##### `putEnterprisePolicies` <a name="putEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies"></a>

```typescript
public putEnterprisePolicies(value: IResolvable | BedrockagentcoreBrowserCustomEnterprisePolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putEnterprisePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: BedrockagentcoreBrowserCustomNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `putRecordingConfig` <a name="putRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig"></a>

```typescript
public putRecordingConfig(value: BedrockagentcoreBrowserCustomRecordingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.putRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `resetBrowserSigning` <a name="resetBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetBrowserSigning"></a>

```typescript
public resetBrowserSigning(): void
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetCertificates"></a>

```typescript
public resetCertificates(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnterprisePolicies` <a name="resetEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetEnterprisePolicies"></a>

```typescript
public resetEnterprisePolicies(): void
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetExecutionRoleArn"></a>

```typescript
public resetExecutionRoleArn(): void
```

##### `resetRecordingConfig` <a name="resetRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetRecordingConfig"></a>

```typescript
public resetRecordingConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreBrowserCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreBrowserCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreBrowserCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreBrowserCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn">browserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId">browserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning">browserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies">enterprisePolicies</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig">recordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput">browserSigningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput">certificatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput">enterprisePoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput">recordingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `browserArn`<sup>Required</sup> <a name="browserArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserArn"></a>

```typescript
public readonly browserArn: string;
```

- *Type:* string

---

##### `browserId`<sup>Required</sup> <a name="browserId" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserId"></a>

```typescript
public readonly browserId: string;
```

- *Type:* string

---

##### `browserSigning`<sup>Required</sup> <a name="browserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigning"></a>

```typescript
public readonly browserSigning: BedrockagentcoreBrowserCustomBrowserSigningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference">BedrockagentcoreBrowserCustomBrowserSigningOutputReference</a>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificates"></a>

```typescript
public readonly certificates: BedrockagentcoreBrowserCustomCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList">BedrockagentcoreBrowserCustomCertificatesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `enterprisePolicies`<sup>Required</sup> <a name="enterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePolicies"></a>

```typescript
public readonly enterprisePolicies: BedrockagentcoreBrowserCustomEnterprisePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList">BedrockagentcoreBrowserCustomEnterprisePoliciesList</a>

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference</a>

---

##### `recordingConfig`<sup>Required</sup> <a name="recordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfig"></a>

```typescript
public readonly recordingConfig: BedrockagentcoreBrowserCustomRecordingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference">BedrockagentcoreBrowserCustomRecordingConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `browserSigningInput`<sup>Optional</sup> <a name="browserSigningInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.browserSigningInput"></a>

```typescript
public readonly browserSigningInput: IResolvable | BedrockagentcoreBrowserCustomBrowserSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: IResolvable | BedrockagentcoreBrowserCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enterprisePoliciesInput`<sup>Optional</sup> <a name="enterprisePoliciesInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.enterprisePoliciesInput"></a>

```typescript
public readonly enterprisePoliciesInput: IResolvable | BedrockagentcoreBrowserCustomEnterprisePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | BedrockagentcoreBrowserCustomNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---

##### `recordingConfigInput`<sup>Optional</sup> <a name="recordingConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.recordingConfigInput"></a>

```typescript
public readonly recordingConfigInput: IResolvable | BedrockagentcoreBrowserCustomRecordingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreBrowserCustomBrowserSigning <a name="BedrockagentcoreBrowserCustomBrowserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomBrowserSigning: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

### BedrockagentcoreBrowserCustomCertificates <a name="BedrockagentcoreBrowserCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomCertificates: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `certificateLocation`<sup>Optional</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates.property.certificateLocation"></a>

```typescript
public readonly certificateLocation: BedrockagentcoreBrowserCustomCertificatesCertificateLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#certificate_location BedrockagentcoreBrowserCustom#certificate_location}

---

### BedrockagentcoreBrowserCustomCertificatesCertificateLocation <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomCertificatesCertificateLocation: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn">secretArn</a></code> | <code>string</code> | Secrets Manager secret ARN. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#secret_arn BedrockagentcoreBrowserCustom#secret_arn}

---

### BedrockagentcoreBrowserCustomConfig <a name="BedrockagentcoreBrowserCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomConfig: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name">name</a></code> | <code>string</code> | The name of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | Network configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning">browserSigning</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | Browser signing configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates">certificates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description">description</a></code> | <code>string</code> | The description of the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies">enterprisePolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | A list of enterprise policy files for the browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig">recordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | Recording configuration for browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#name BedrockagentcoreBrowserCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: BedrockagentcoreBrowserCustomNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

Network configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#network_configuration BedrockagentcoreBrowserCustom#network_configuration}

---

##### `browserSigning`<sup>Optional</sup> <a name="browserSigning" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.browserSigning"></a>

```typescript
public readonly browserSigning: BedrockagentcoreBrowserCustomBrowserSigning;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

Browser signing configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#browser_signing BedrockagentcoreBrowserCustom#browser_signing}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.certificates"></a>

```typescript
public readonly certificates: IResolvable | BedrockagentcoreBrowserCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#certificates BedrockagentcoreBrowserCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#description BedrockagentcoreBrowserCustom#description}

---

##### `enterprisePolicies`<sup>Optional</sup> <a name="enterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.enterprisePolicies"></a>

```typescript
public readonly enterprisePolicies: IResolvable | BedrockagentcoreBrowserCustomEnterprisePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

A list of enterprise policy files for the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enterprise_policies BedrockagentcoreBrowserCustom#enterprise_policies}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that the browser uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#execution_role_arn BedrockagentcoreBrowserCustom#execution_role_arn}

---

##### `recordingConfig`<sup>Optional</sup> <a name="recordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.recordingConfig"></a>

```typescript
public readonly recordingConfig: BedrockagentcoreBrowserCustomRecordingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

Recording configuration for browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#recording_config BedrockagentcoreBrowserCustom#recording_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#tags BedrockagentcoreBrowserCustom#tags}

---

### BedrockagentcoreBrowserCustomEnterprisePolicies <a name="BedrockagentcoreBrowserCustomEnterprisePolicies" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomEnterprisePolicies: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | The S3 location of the enterprise policy file. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type">type</a></code> | <code>string</code> | The type of browser enterprise policy. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.location"></a>

```typescript
public readonly location: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

The S3 location of the enterprise policy file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#location BedrockagentcoreBrowserCustom#location}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of browser enterprise policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#type BedrockagentcoreBrowserCustom#type}

---

### BedrockagentcoreBrowserCustomEnterprisePoliciesLocation <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomEnterprisePoliciesLocation: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

### BedrockagentcoreBrowserCustomNetworkConfiguration <a name="BedrockagentcoreBrowserCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomNetworkConfiguration: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>string</code> | Network modes supported by browser. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Network modes supported by browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#network_mode BedrockagentcoreBrowserCustom#network_mode}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#vpc_config BedrockagentcoreBrowserCustom#vpc_config}

---

### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Subnets for VPC. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#security_groups BedrockagentcoreBrowserCustom#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#subnets BedrockagentcoreBrowserCustom#subnets}

---

### BedrockagentcoreBrowserCustomRecordingConfig <a name="BedrockagentcoreBrowserCustomRecordingConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomRecordingConfig: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | S3 Location Configuration. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#enabled BedrockagentcoreBrowserCustom#enabled}.

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig.property.s3Location"></a>

```typescript
public readonly s3Location: BedrockagentcoreBrowserCustomRecordingConfigS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

S3 Location Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#s3_location BedrockagentcoreBrowserCustom#s3_location}

---

### BedrockagentcoreBrowserCustomRecordingConfigS3Location <a name="BedrockagentcoreBrowserCustomRecordingConfigS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

const bedrockagentcoreBrowserCustomRecordingConfigS3Location: bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#bucket BedrockagentcoreBrowserCustom#bucket}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_browser_custom#prefix BedrockagentcoreBrowserCustom#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreBrowserCustomBrowserSigningOutputReference <a name="BedrockagentcoreBrowserCustomBrowserSigningOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomBrowserSigning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomBrowserSigning">BedrockagentcoreBrowserCustomBrowserSigning</a>

---


### BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomCertificatesCertificateLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreBrowserCustomCertificatesList <a name="BedrockagentcoreBrowserCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserCustomCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>[]

---


### BedrockagentcoreBrowserCustomCertificatesOutputReference <a name="BedrockagentcoreBrowserCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation">putCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation">resetCertificateLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateLocation` <a name="putCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation"></a>

```typescript
public putCertificateLocation(value: BedrockagentcoreBrowserCustomCertificatesCertificateLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `resetCertificateLocation` <a name="resetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.resetCertificateLocation"></a>

```typescript
public resetCertificateLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput">certificateLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateLocation`<sup>Required</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocation"></a>

```typescript
public readonly certificateLocation: BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreBrowserCustomCertificatesCertificateLocationOutputReference</a>

---

##### `certificateLocationInput`<sup>Optional</sup> <a name="certificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```typescript
public readonly certificateLocationInput: IResolvable | BedrockagentcoreBrowserCustomCertificatesCertificateLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesCertificateLocation">BedrockagentcoreBrowserCustomCertificatesCertificateLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomCertificates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomCertificates">BedrockagentcoreBrowserCustomCertificates</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesList <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesList" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get"></a>

```typescript
public get(index: number): BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomEnterprisePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>[]

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomEnterprisePoliciesLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---


### BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference <a name="BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation"></a>

```typescript
public putLocation(value: BedrockagentcoreBrowserCustomEnterprisePoliciesLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.location"></a>

```typescript
public readonly location: BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference">BedrockagentcoreBrowserCustomEnterprisePoliciesLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | BedrockagentcoreBrowserCustomEnterprisePoliciesLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesLocation">BedrockagentcoreBrowserCustomEnterprisePoliciesLocation</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomEnterprisePolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomEnterprisePolicies">BedrockagentcoreBrowserCustomEnterprisePolicies</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfiguration">BedrockagentcoreBrowserCustomNetworkConfiguration</a>

---


### BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig">BedrockagentcoreBrowserCustomNetworkConfigurationVpcConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: BedrockagentcoreBrowserCustomRecordingConfigS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference">BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | BedrockagentcoreBrowserCustomRecordingConfigS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomRecordingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfig">BedrockagentcoreBrowserCustomRecordingConfig</a>

---


### BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference <a name="BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreBrowserCustom } from '@cdktn/provider-awscc'

new bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreBrowserCustomRecordingConfigS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreBrowserCustom.BedrockagentcoreBrowserCustomRecordingConfigS3Location">BedrockagentcoreBrowserCustomRecordingConfigS3Location</a>

---



