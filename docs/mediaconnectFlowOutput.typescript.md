# `mediaconnectFlowOutput` Submodule <a name="`mediaconnectFlowOutput` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowOutput <a name="MediaconnectFlowOutput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output awscc_mediaconnect_flow_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutput(scope: Construct, id: string, config: MediaconnectFlowOutputConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig">MediaconnectFlowOutputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig">MediaconnectFlowOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations">putMediaStreamOutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption">putRouterIntegrationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment">putVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetCidrAllowList">resetCidrAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMaxLatency">resetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMediaStreamOutputConfigurations">resetMediaStreamOutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMinLatency">resetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiOutputTimecodeSource">resetNdiOutputTimecodeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiProgramName">resetNdiProgramName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiSpeedHqQuality">resetNdiSpeedHqQuality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOutputStatus">resetOutputStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRemoteId">resetRemoteId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationState">resetRouterIntegrationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationTransitEncryption">resetRouterIntegrationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetSmoothingLatency">resetSmoothingLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetVpcInterfaceAttachment">resetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption"></a>

```typescript
public putEncryption(value: MediaconnectFlowOutputEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

---

##### `putMediaStreamOutputConfigurations` <a name="putMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations"></a>

```typescript
public putMediaStreamOutputConfigurations(value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putMediaStreamOutputConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]

---

##### `putRouterIntegrationTransitEncryption` <a name="putRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption"></a>

```typescript
public putRouterIntegrationTransitEncryption(value: MediaconnectFlowOutputRouterIntegrationTransitEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putRouterIntegrationTransitEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags"></a>

```typescript
public putTags(value: IResolvable | MediaconnectFlowOutputTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]

---

##### `putVpcInterfaceAttachment` <a name="putVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment"></a>

```typescript
public putVpcInterfaceAttachment(value: MediaconnectFlowOutputVpcInterfaceAttachment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

---

##### `resetCidrAllowList` <a name="resetCidrAllowList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetCidrAllowList"></a>

```typescript
public resetCidrAllowList(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetMaxLatency` <a name="resetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMaxLatency"></a>

```typescript
public resetMaxLatency(): void
```

##### `resetMediaStreamOutputConfigurations` <a name="resetMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMediaStreamOutputConfigurations"></a>

```typescript
public resetMediaStreamOutputConfigurations(): void
```

##### `resetMinLatency` <a name="resetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetMinLatency"></a>

```typescript
public resetMinLatency(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNdiOutputTimecodeSource` <a name="resetNdiOutputTimecodeSource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiOutputTimecodeSource"></a>

```typescript
public resetNdiOutputTimecodeSource(): void
```

##### `resetNdiProgramName` <a name="resetNdiProgramName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiProgramName"></a>

```typescript
public resetNdiProgramName(): void
```

##### `resetNdiSpeedHqQuality` <a name="resetNdiSpeedHqQuality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetNdiSpeedHqQuality"></a>

```typescript
public resetNdiSpeedHqQuality(): void
```

##### `resetOutputStatus` <a name="resetOutputStatus" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetOutputStatus"></a>

```typescript
public resetOutputStatus(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRemoteId` <a name="resetRemoteId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRemoteId"></a>

```typescript
public resetRemoteId(): void
```

##### `resetRouterIntegrationState` <a name="resetRouterIntegrationState" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationState"></a>

```typescript
public resetRouterIntegrationState(): void
```

##### `resetRouterIntegrationTransitEncryption` <a name="resetRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetRouterIntegrationTransitEncryption"></a>

```typescript
public resetRouterIntegrationTransitEncryption(): void
```

##### `resetSmoothingLatency` <a name="resetSmoothingLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetSmoothingLatency"></a>

```typescript
public resetSmoothingLatency(): void
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetStreamId"></a>

```typescript
public resetStreamId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcInterfaceAttachment` <a name="resetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.resetVpcInterfaceAttachment"></a>

```typescript
public resetVpcInterfaceAttachment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowOutput resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectFlowOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference">MediaconnectFlowOutputEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurations">mediaStreamOutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputArn">outputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryption">routerIntegrationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList">MediaconnectFlowOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowListInput">cidrAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryptionInput">encryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatencyInput">maxLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurationsInput">mediaStreamOutputConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatencyInput">minLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSourceInput">ndiOutputTimecodeSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramNameInput">ndiProgramNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQualityInput">ndiSpeedHqQualityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatusInput">outputStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteIdInput">remoteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationStateInput">routerIntegrationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryptionInput">routerIntegrationTransitEncryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatencyInput">smoothingLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachmentInput">vpcInterfaceAttachmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowList">cidrAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatency">maxLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatency">minLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSource">ndiOutputTimecodeSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramName">ndiProgramName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQuality">ndiSpeedHqQuality</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatus">outputStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteId">remoteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationState">routerIntegrationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatency">smoothingLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryption"></a>

```typescript
public readonly encryption: MediaconnectFlowOutputEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference">MediaconnectFlowOutputEncryptionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaStreamOutputConfigurations`<sup>Required</sup> <a name="mediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurations"></a>

```typescript
public readonly mediaStreamOutputConfigurations: MediaconnectFlowOutputMediaStreamOutputConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsList</a>

---

##### `outputArn`<sup>Required</sup> <a name="outputArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputArn"></a>

```typescript
public readonly outputArn: string;
```

- *Type:* string

---

##### `routerIntegrationTransitEncryption`<sup>Required</sup> <a name="routerIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryption"></a>

```typescript
public readonly routerIntegrationTransitEncryption: MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tags"></a>

```typescript
public readonly tags: MediaconnectFlowOutputTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList">MediaconnectFlowOutputTagsList</a>

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference">MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference</a>

---

##### `cidrAllowListInput`<sup>Optional</sup> <a name="cidrAllowListInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowListInput"></a>

```typescript
public readonly cidrAllowListInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: IResolvable | MediaconnectFlowOutputEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `maxLatencyInput`<sup>Optional</sup> <a name="maxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatencyInput"></a>

```typescript
public readonly maxLatencyInput: number;
```

- *Type:* number

---

##### `mediaStreamOutputConfigurationsInput`<sup>Optional</sup> <a name="mediaStreamOutputConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.mediaStreamOutputConfigurationsInput"></a>

```typescript
public readonly mediaStreamOutputConfigurationsInput: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]

---

##### `minLatencyInput`<sup>Optional</sup> <a name="minLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatencyInput"></a>

```typescript
public readonly minLatencyInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ndiOutputTimecodeSourceInput`<sup>Optional</sup> <a name="ndiOutputTimecodeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSourceInput"></a>

```typescript
public readonly ndiOutputTimecodeSourceInput: string;
```

- *Type:* string

---

##### `ndiProgramNameInput`<sup>Optional</sup> <a name="ndiProgramNameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramNameInput"></a>

```typescript
public readonly ndiProgramNameInput: string;
```

- *Type:* string

---

##### `ndiSpeedHqQualityInput`<sup>Optional</sup> <a name="ndiSpeedHqQualityInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQualityInput"></a>

```typescript
public readonly ndiSpeedHqQualityInput: number;
```

- *Type:* number

---

##### `outputStatusInput`<sup>Optional</sup> <a name="outputStatusInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatusInput"></a>

```typescript
public readonly outputStatusInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `remoteIdInput`<sup>Optional</sup> <a name="remoteIdInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteIdInput"></a>

```typescript
public readonly remoteIdInput: string;
```

- *Type:* string

---

##### `routerIntegrationStateInput`<sup>Optional</sup> <a name="routerIntegrationStateInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationStateInput"></a>

```typescript
public readonly routerIntegrationStateInput: string;
```

- *Type:* string

---

##### `routerIntegrationTransitEncryptionInput`<sup>Optional</sup> <a name="routerIntegrationTransitEncryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationTransitEncryptionInput"></a>

```typescript
public readonly routerIntegrationTransitEncryptionInput: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---

##### `smoothingLatencyInput`<sup>Optional</sup> <a name="smoothingLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatencyInput"></a>

```typescript
public readonly smoothingLatencyInput: number;
```

- *Type:* number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediaconnectFlowOutputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]

---

##### `vpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="vpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.vpcInterfaceAttachmentInput"></a>

```typescript
public readonly vpcInterfaceAttachmentInput: IResolvable | MediaconnectFlowOutputVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

---

##### `cidrAllowList`<sup>Required</sup> <a name="cidrAllowList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.cidrAllowList"></a>

```typescript
public readonly cidrAllowList: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `maxLatency`<sup>Required</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

---

##### `minLatency`<sup>Required</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ndiOutputTimecodeSource`<sup>Required</sup> <a name="ndiOutputTimecodeSource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiOutputTimecodeSource"></a>

```typescript
public readonly ndiOutputTimecodeSource: string;
```

- *Type:* string

---

##### `ndiProgramName`<sup>Required</sup> <a name="ndiProgramName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiProgramName"></a>

```typescript
public readonly ndiProgramName: string;
```

- *Type:* string

---

##### `ndiSpeedHqQuality`<sup>Required</sup> <a name="ndiSpeedHqQuality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.ndiSpeedHqQuality"></a>

```typescript
public readonly ndiSpeedHqQuality: number;
```

- *Type:* number

---

##### `outputStatus`<sup>Required</sup> <a name="outputStatus" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.outputStatus"></a>

```typescript
public readonly outputStatus: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `remoteId`<sup>Required</sup> <a name="remoteId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.remoteId"></a>

```typescript
public readonly remoteId: string;
```

- *Type:* string

---

##### `routerIntegrationState`<sup>Required</sup> <a name="routerIntegrationState" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.routerIntegrationState"></a>

```typescript
public readonly routerIntegrationState: string;
```

- *Type:* string

---

##### `smoothingLatency`<sup>Required</sup> <a name="smoothingLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.smoothingLatency"></a>

```typescript
public readonly smoothingLatency: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutput.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowOutputConfig <a name="MediaconnectFlowOutputConfig" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputConfig: mediaconnectFlowOutput.MediaconnectFlowOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.flowArn">flowArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.cidrAllowList">cidrAllowList</a></code> | <code>string[]</code> | The range of IP addresses that should be allowed to initiate output requests to this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.description">description</a></code> | <code>string</code> | A description of the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.destination">destination</a></code> | <code>string</code> | The address where you want to send the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | The type of key used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.maxLatency">maxLatency</a></code> | <code>number</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.mediaStreamOutputConfigurations">mediaStreamOutputConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]</code> | The definition for each media stream that is associated with the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.minLatency">minLatency</a></code> | <code>number</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.name">name</a></code> | <code>string</code> | The name of the output. This value must be unique within the current flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiOutputTimecodeSource">ndiOutputTimecodeSource</a></code> | <code>string</code> | The timecode source for the NDI output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiProgramName">ndiProgramName</a></code> | <code>string</code> | A suffix for the names of the NDI sources that the flow creates. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiSpeedHqQuality">ndiSpeedHqQuality</a></code> | <code>number</code> | A quality setting for the NDI Speed HQ encoder. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.outputStatus">outputStatus</a></code> | <code>string</code> | An indication of whether the output should transmit data or not. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.port">port</a></code> | <code>number</code> | The port to use when content is distributed to this output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol that is used by the source or output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.remoteId">remoteId</a></code> | <code>string</code> | The remote ID for the Zixi-pull stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationState">routerIntegrationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationTransitEncryption">routerIntegrationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.smoothingLatency">smoothingLatency</a></code> | <code>number</code> | The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.streamId">streamId</a></code> | <code>string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]</code> | Key-value pairs that can be used to tag and organize this flow output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this output. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#flow_arn MediaconnectFlowOutput#flow_arn}

---

##### `cidrAllowList`<sup>Optional</sup> <a name="cidrAllowList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.cidrAllowList"></a>

```typescript
public readonly cidrAllowList: string[];
```

- *Type:* string[]

The range of IP addresses that should be allowed to initiate output requests to this flow.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#cidr_allow_list MediaconnectFlowOutput#cidr_allow_list}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#description MediaconnectFlowOutput#description}

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

The address where you want to send the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination MediaconnectFlowOutput#destination}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.encryption"></a>

```typescript
public readonly encryption: MediaconnectFlowOutputEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

The type of key used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption MediaconnectFlowOutput#encryption}

---

##### `maxLatency`<sup>Optional</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#max_latency MediaconnectFlowOutput#max_latency}

---

##### `mediaStreamOutputConfigurations`<sup>Optional</sup> <a name="mediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.mediaStreamOutputConfigurations"></a>

```typescript
public readonly mediaStreamOutputConfigurations: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]

The definition for each media stream that is associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#media_stream_output_configurations MediaconnectFlowOutput#media_stream_output_configurations}

---

##### `minLatency`<sup>Optional</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#min_latency MediaconnectFlowOutput#min_latency}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the output. This value must be unique within the current flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

##### `ndiOutputTimecodeSource`<sup>Optional</sup> <a name="ndiOutputTimecodeSource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiOutputTimecodeSource"></a>

```typescript
public readonly ndiOutputTimecodeSource: string;
```

- *Type:* string

The timecode source for the NDI output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_output_timecode_source MediaconnectFlowOutput#ndi_output_timecode_source}

---

##### `ndiProgramName`<sup>Optional</sup> <a name="ndiProgramName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiProgramName"></a>

```typescript
public readonly ndiProgramName: string;
```

- *Type:* string

A suffix for the names of the NDI sources that the flow creates.

If a custom name isn't specified, MediaConnect uses the output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_program_name MediaconnectFlowOutput#ndi_program_name}

---

##### `ndiSpeedHqQuality`<sup>Optional</sup> <a name="ndiSpeedHqQuality" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.ndiSpeedHqQuality"></a>

```typescript
public readonly ndiSpeedHqQuality: number;
```

- *Type:* number

A quality setting for the NDI Speed HQ encoder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#ndi_speed_hq_quality MediaconnectFlowOutput#ndi_speed_hq_quality}

---

##### `outputStatus`<sup>Optional</sup> <a name="outputStatus" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.outputStatus"></a>

```typescript
public readonly outputStatus: string;
```

- *Type:* string

An indication of whether the output should transmit data or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#output_status MediaconnectFlowOutput#output_status}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port to use when content is distributed to this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#port MediaconnectFlowOutput#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol that is used by the source or output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#protocol MediaconnectFlowOutput#protocol}

---

##### `remoteId`<sup>Optional</sup> <a name="remoteId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.remoteId"></a>

```typescript
public readonly remoteId: string;
```

- *Type:* string

The remote ID for the Zixi-pull stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#remote_id MediaconnectFlowOutput#remote_id}

---

##### `routerIntegrationState`<sup>Optional</sup> <a name="routerIntegrationState" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationState"></a>

```typescript
public readonly routerIntegrationState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_state MediaconnectFlowOutput#router_integration_state}.

---

##### `routerIntegrationTransitEncryption`<sup>Optional</sup> <a name="routerIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.routerIntegrationTransitEncryption"></a>

```typescript
public readonly routerIntegrationTransitEncryption: MediaconnectFlowOutputRouterIntegrationTransitEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#router_integration_transit_encryption MediaconnectFlowOutput#router_integration_transit_encryption}

---

##### `smoothingLatency`<sup>Optional</sup> <a name="smoothingLatency" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.smoothingLatency"></a>

```typescript
public readonly smoothingLatency: number;
```

- *Type:* number

The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#smoothing_latency MediaconnectFlowOutput#smoothing_latency}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#stream_id MediaconnectFlowOutput#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediaconnectFlowOutputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]

Key-value pairs that can be used to tag and organize this flow output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#tags MediaconnectFlowOutput#tags}

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputConfig.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowOutputVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_attachment MediaconnectFlowOutput#vpc_interface_attachment}

---

### MediaconnectFlowOutputEncryption <a name="MediaconnectFlowOutputEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputEncryption: mediaconnectFlowOutput.MediaconnectFlowOutputEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.algorithm">algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.keyType">keyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#algorithm MediaconnectFlowOutput#algorithm}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key_type MediaconnectFlowOutput#key_type}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurations <a name="MediaconnectFlowOutputMediaStreamOutputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputMediaStreamOutputConfigurations: mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.destinationConfigurations">destinationConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]</code> | The media streams that you want to associate with the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingName">encodingName</a></code> | <code>string</code> | The format that will be used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingParameters">encodingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | A collection of parameters that determine how MediaConnect will convert the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |

---

##### `destinationConfigurations`<sup>Optional</sup> <a name="destinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.destinationConfigurations"></a>

```typescript
public readonly destinationConfigurations: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]

The media streams that you want to associate with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_configurations MediaconnectFlowOutput#destination_configurations}

---

##### `encodingName`<sup>Optional</sup> <a name="encodingName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingName"></a>

```typescript
public readonly encodingName: string;
```

- *Type:* string

The format that will be used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoding_name MediaconnectFlowOutput#encoding_name}

---

##### `encodingParameters`<sup>Optional</sup> <a name="encodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.encodingParameters"></a>

```typescript
public readonly encodingParameters: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

A collection of parameters that determine how MediaConnect will convert the content.

These fields only apply to outputs on flows that have a CDI source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoding_parameters MediaconnectFlowOutput#encoding_parameters}

---

##### `mediaStreamName`<sup>Optional</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#media_stream_name MediaconnectFlowOutput#media_stream_name}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations: mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationIp">destinationIp</a></code> | <code>string</code> | The IP address where contents of the media stream will be sent. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationPort">destinationPort</a></code> | <code>number</code> | The port to use when the content of the media stream is distributed to the output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | The VPC interface that is used for the media stream associated with the output. |

---

##### `destinationIp`<sup>Optional</sup> <a name="destinationIp" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

The IP address where contents of the media stream will be sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_ip MediaconnectFlowOutput#destination_ip}

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

The port to use when the content of the media stream is distributed to the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#destination_port MediaconnectFlowOutput#destination_port}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations.property.interface"></a>

```typescript
public readonly interface: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

The VPC interface that is used for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#interface MediaconnectFlowOutput#interface}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface: mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.property.name">name</a></code> | <code>string</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#name MediaconnectFlowOutput#name}

---

### MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters: mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.compressionFactor">compressionFactor</a></code> | <code>number</code> | A value that is used to calculate compression for an output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.encoderProfile">encoderProfile</a></code> | <code>string</code> | A setting on the encoder that drives compression settings. |

---

##### `compressionFactor`<sup>Optional</sup> <a name="compressionFactor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.compressionFactor"></a>

```typescript
public readonly compressionFactor: number;
```

- *Type:* number

A value that is used to calculate compression for an output.

The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#compression_factor MediaconnectFlowOutput#compression_factor}

---

##### `encoderProfile`<sup>Optional</sup> <a name="encoderProfile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters.property.encoderProfile"></a>

```typescript
public readonly encoderProfile: string;
```

- *Type:* string

A setting on the encoder that drives compression settings.

This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encoder_profile MediaconnectFlowOutput#encoder_profile}

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryption <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputRouterIntegrationTransitEncryption: mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for flow transit encryption keys. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyType">encryptionKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_type MediaconnectFlowOutput#encryption_key_type}. |

---

##### `encryptionKeyConfiguration`<sup>Optional</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyConfiguration"></a>

```typescript
public readonly encryptionKeyConfiguration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for flow transit encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_configuration MediaconnectFlowOutput#encryption_key_configuration}

---

##### `encryptionKeyType`<sup>Optional</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption.property.encryptionKeyType"></a>

```typescript
public readonly encryptionKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#encryption_key_type MediaconnectFlowOutput#encryption_key_type}.

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration: mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.automatic">automatic</a></code> | <code>string</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```typescript
public readonly automatic: string;
```

- *Type:* string

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#automatic MediaconnectFlowOutput#automatic}

---

##### `secretsManager`<sup>Optional</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```typescript
public readonly secretsManager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption of a flow output using AWS Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secrets_manager MediaconnectFlowOutput#secrets_manager}

---

### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager: mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the AWS Secrets Manager secret used for transit encryption to the router input. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role used for transit encryption to the router input using AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#role_arn MediaconnectFlowOutput#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the AWS Secrets Manager secret used for transit encryption to the router input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#secret_arn MediaconnectFlowOutput#secret_arn}

---

### MediaconnectFlowOutputTags <a name="MediaconnectFlowOutputTags" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputTags: mediaconnectFlowOutput.MediaconnectFlowOutputTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key MediaconnectFlowOutput#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#value MediaconnectFlowOutput#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#key MediaconnectFlowOutput#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#value MediaconnectFlowOutput#value}.

---

### MediaconnectFlowOutputVpcInterfaceAttachment <a name="MediaconnectFlowOutputVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

const mediaconnectFlowOutputVpcInterfaceAttachment: mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this output. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC interface to use for this output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_output#vpc_interface_name MediaconnectFlowOutput#vpc_interface_name}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowOutputEncryptionOutputReference <a name="MediaconnectFlowOutputEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputEncryption">MediaconnectFlowOutputEncryption</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface">putInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationIp">resetDestinationIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetInterface">resetInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterface` <a name="putInterface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface"></a>

```typescript
public putInterface(value: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.putInterface.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---

##### `resetDestinationIp` <a name="resetDestinationIp" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationIp"></a>

```typescript
public resetDestinationIp(): void
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetDestinationPort"></a>

```typescript
public resetDestinationPort(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIpInput">destinationIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPortInput">destinationPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp">destinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort">destinationPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interface"></a>

```typescript
public readonly interface: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterfaceOutputReference</a>

---

##### `destinationIpInput`<sup>Optional</sup> <a name="destinationIpInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIpInput"></a>

```typescript
public readonly destinationIpInput: string;
```

- *Type:* string

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPortInput"></a>

```typescript
public readonly destinationPortInput: number;
```

- *Type:* number

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsInterface</a>

---

##### `destinationIp`<sup>Required</sup> <a name="destinationIp" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationIp"></a>

```typescript
public readonly destinationIp: string;
```

- *Type:* string

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.destinationPort"></a>

```typescript
public readonly destinationPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetCompressionFactor">resetCompressionFactor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetEncoderProfile">resetEncoderProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionFactor` <a name="resetCompressionFactor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetCompressionFactor"></a>

```typescript
public resetCompressionFactor(): void
```

##### `resetEncoderProfile` <a name="resetEncoderProfile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.resetEncoderProfile"></a>

```typescript
public resetEncoderProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactorInput">compressionFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfileInput">encoderProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor">compressionFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile">encoderProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionFactorInput`<sup>Optional</sup> <a name="compressionFactorInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactorInput"></a>

```typescript
public readonly compressionFactorInput: number;
```

- *Type:* number

---

##### `encoderProfileInput`<sup>Optional</sup> <a name="encoderProfileInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfileInput"></a>

```typescript
public readonly encoderProfileInput: string;
```

- *Type:* string

---

##### `compressionFactor`<sup>Required</sup> <a name="compressionFactor" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.compressionFactor"></a>

```typescript
public readonly compressionFactor: number;
```

- *Type:* number

---

##### `encoderProfile`<sup>Required</sup> <a name="encoderProfile" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.encoderProfile"></a>

```typescript
public readonly encoderProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsList <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>[]

---


### MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference <a name="MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations">putDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters">putEncodingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetDestinationConfigurations">resetDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingName">resetEncodingName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingParameters">resetEncodingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetMediaStreamName">resetMediaStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationConfigurations` <a name="putDestinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations"></a>

```typescript
public putDestinationConfigurations(value: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]

---

##### `putEncodingParameters` <a name="putEncodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters"></a>

```typescript
public putEncodingParameters(value: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.putEncodingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---

##### `resetDestinationConfigurations` <a name="resetDestinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetDestinationConfigurations"></a>

```typescript
public resetDestinationConfigurations(): void
```

##### `resetEncodingName` <a name="resetEncodingName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingName"></a>

```typescript
public resetEncodingName(): void
```

##### `resetEncodingParameters` <a name="resetEncodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetEncodingParameters"></a>

```typescript
public resetEncodingParameters(): void
```

##### `resetMediaStreamName` <a name="resetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.resetMediaStreamName"></a>

```typescript
public resetMediaStreamName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations">destinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters">encodingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurationsInput">destinationConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingNameInput">encodingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParametersInput">encodingParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamNameInput">mediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName">encodingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationConfigurations`<sup>Required</sup> <a name="destinationConfigurations" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurations"></a>

```typescript
public readonly destinationConfigurations: MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurationsList</a>

---

##### `encodingParameters`<sup>Required</sup> <a name="encodingParameters" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParameters"></a>

```typescript
public readonly encodingParameters: MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParametersOutputReference</a>

---

##### `destinationConfigurationsInput`<sup>Optional</sup> <a name="destinationConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.destinationConfigurationsInput"></a>

```typescript
public readonly destinationConfigurationsInput: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurationsDestinationConfigurations</a>[]

---

##### `encodingNameInput`<sup>Optional</sup> <a name="encodingNameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingNameInput"></a>

```typescript
public readonly encodingNameInput: string;
```

- *Type:* string

---

##### `encodingParametersInput`<sup>Optional</sup> <a name="encodingParametersInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingParametersInput"></a>

```typescript
public readonly encodingParametersInput: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters">MediaconnectFlowOutputMediaStreamOutputConfigurationsEncodingParameters</a>

---

##### `mediaStreamNameInput`<sup>Optional</sup> <a name="mediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```typescript
public readonly mediaStreamNameInput: string;
```

- *Type:* string

---

##### `encodingName`<sup>Required</sup> <a name="encodingName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.encodingName"></a>

```typescript
public readonly encodingName: string;
```

- *Type:* string

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputMediaStreamOutputConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputMediaStreamOutputConfigurations">MediaconnectFlowOutputMediaStreamOutputConfigurations</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">putSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">resetSecretsManager</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretsManager` <a name="putSecretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```typescript
public putSecretsManager(value: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetSecretsManager` <a name="resetSecretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```typescript
public resetSecretsManager(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">secretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">automaticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">secretsManagerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">automatic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretsManager`<sup>Required</sup> <a name="secretsManager" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```typescript
public readonly secretsManager: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```typescript
public readonly automaticInput: string;
```

- *Type:* string

---

##### `secretsManagerInput`<sup>Optional</sup> <a name="secretsManagerInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```typescript
public readonly secretsManagerInput: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```typescript
public readonly automatic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---


### MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference <a name="MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">putEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">resetEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyType">resetEncryptionKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKeyConfiguration` <a name="putEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```typescript
public putEncryptionKeyConfiguration(value: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `resetEncryptionKeyConfiguration` <a name="resetEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```typescript
public resetEncryptionKeyConfiguration(): void
```

##### `resetEncryptionKeyType` <a name="resetEncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```typescript
public resetEncryptionKeyType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">encryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">encryptionKeyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">encryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType">encryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKeyConfiguration`<sup>Required</sup> <a name="encryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```typescript
public readonly encryptionKeyConfiguration: MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `encryptionKeyConfigurationInput`<sup>Optional</sup> <a name="encryptionKeyConfigurationInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```typescript
public readonly encryptionKeyConfigurationInput: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration">MediaconnectFlowOutputRouterIntegrationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `encryptionKeyTypeInput`<sup>Optional</sup> <a name="encryptionKeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```typescript
public readonly encryptionKeyTypeInput: string;
```

- *Type:* string

---

##### `encryptionKeyType`<sup>Required</sup> <a name="encryptionKeyType" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```typescript
public readonly encryptionKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputRouterIntegrationTransitEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputRouterIntegrationTransitEncryption">MediaconnectFlowOutputRouterIntegrationTransitEncryption</a>

---


### MediaconnectFlowOutputTagsList <a name="MediaconnectFlowOutputTagsList" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>[]

---


### MediaconnectFlowOutputTagsOutputReference <a name="MediaconnectFlowOutputTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputTags">MediaconnectFlowOutputTags</a>

---


### MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowOutput } from '@cdktn/provider-awscc'

new mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowOutputVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowOutput.MediaconnectFlowOutputVpcInterfaceAttachment">MediaconnectFlowOutputVpcInterfaceAttachment</a>

---



