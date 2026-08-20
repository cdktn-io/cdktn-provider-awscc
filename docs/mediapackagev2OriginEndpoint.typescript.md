# `mediapackagev2OriginEndpoint` Submodule <a name="`mediapackagev2OriginEndpoint` Submodule" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2OriginEndpoint <a name="Mediapackagev2OriginEndpoint" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint(scope: Construct, id: string, config: Mediapackagev2OriginEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig">Mediapackagev2OriginEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig">Mediapackagev2OriginEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests">putDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration">putForceEndpointErrorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests">putHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests">putLowLatencyHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests">putMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment">putSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDashManifests">resetDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetForceEndpointErrorConfiguration">resetForceEndpointErrorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetHlsManifests">resetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetLowLatencyHlsManifests">resetLowLatencyHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetMssManifests">resetMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetSegment">resetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetStartoverWindowSeconds">resetStartoverWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetUriSeparator">resetUriSeparator</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDashManifests` <a name="putDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests"></a>

```typescript
public putDashManifests(value: IResolvable | Mediapackagev2OriginEndpointDashManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]

---

##### `putForceEndpointErrorConfiguration` <a name="putForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration"></a>

```typescript
public putForceEndpointErrorConfiguration(value: Mediapackagev2OriginEndpointForceEndpointErrorConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---

##### `putHlsManifests` <a name="putHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests"></a>

```typescript
public putHlsManifests(value: IResolvable | Mediapackagev2OriginEndpointHlsManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]

---

##### `putLowLatencyHlsManifests` <a name="putLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests"></a>

```typescript
public putLowLatencyHlsManifests(value: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]

---

##### `putMssManifests` <a name="putMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests"></a>

```typescript
public putMssManifests(value: IResolvable | Mediapackagev2OriginEndpointMssManifests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]

---

##### `putSegment` <a name="putSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment"></a>

```typescript
public putSegment(value: Mediapackagev2OriginEndpointSegment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | Mediapackagev2OriginEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]

---

##### `resetDashManifests` <a name="resetDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDashManifests"></a>

```typescript
public resetDashManifests(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForceEndpointErrorConfiguration` <a name="resetForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetForceEndpointErrorConfiguration"></a>

```typescript
public resetForceEndpointErrorConfiguration(): void
```

##### `resetHlsManifests` <a name="resetHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetHlsManifests"></a>

```typescript
public resetHlsManifests(): void
```

##### `resetLowLatencyHlsManifests` <a name="resetLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetLowLatencyHlsManifests"></a>

```typescript
public resetLowLatencyHlsManifests(): void
```

##### `resetMssManifests` <a name="resetMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetMssManifests"></a>

```typescript
public resetMssManifests(): void
```

##### `resetSegment` <a name="resetSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetSegment"></a>

```typescript
public resetSegment(): void
```

##### `resetStartoverWindowSeconds` <a name="resetStartoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetStartoverWindowSeconds"></a>

```typescript
public resetStartoverWindowSeconds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUriSeparator` <a name="resetUriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetUriSeparator"></a>

```typescript
public resetUriSeparator(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Mediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Mediapackagev2OriginEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Mediapackagev2OriginEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2OriginEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifests">dashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList">Mediapackagev2OriginEndpointDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestUrls">dashManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration">forceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifests">hlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList">Mediapackagev2OriginEndpointHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestUrls">hlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifests">lowLatencyHlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList">Mediapackagev2OriginEndpointLowLatencyHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls">lowLatencyHlsManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifests">mssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList">Mediapackagev2OriginEndpointMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestUrls">mssManifestUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segment">segment</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference">Mediapackagev2OriginEndpointSegmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList">Mediapackagev2OriginEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupNameInput">channelGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerTypeInput">containerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestsInput">dashManifestsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfigurationInput">forceEndpointErrorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestsInput">hlsManifestsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestsInput">lowLatencyHlsManifestsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestsInput">mssManifestsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointNameInput">originEndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segmentInput">segmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSecondsInput">startoverWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparatorInput">uriSeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerType">containerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparator">uriSeparator</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dashManifests`<sup>Required</sup> <a name="dashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifests"></a>

```typescript
public readonly dashManifests: Mediapackagev2OriginEndpointDashManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList">Mediapackagev2OriginEndpointDashManifestsList</a>

---

##### `dashManifestUrls`<sup>Required</sup> <a name="dashManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestUrls"></a>

```typescript
public readonly dashManifestUrls: string[];
```

- *Type:* string[]

---

##### `forceEndpointErrorConfiguration`<sup>Required</sup> <a name="forceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration"></a>

```typescript
public readonly forceEndpointErrorConfiguration: Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a>

---

##### `hlsManifests`<sup>Required</sup> <a name="hlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifests"></a>

```typescript
public readonly hlsManifests: Mediapackagev2OriginEndpointHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList">Mediapackagev2OriginEndpointHlsManifestsList</a>

---

##### `hlsManifestUrls`<sup>Required</sup> <a name="hlsManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestUrls"></a>

```typescript
public readonly hlsManifestUrls: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lowLatencyHlsManifests`<sup>Required</sup> <a name="lowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifests"></a>

```typescript
public readonly lowLatencyHlsManifests: Mediapackagev2OriginEndpointLowLatencyHlsManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList">Mediapackagev2OriginEndpointLowLatencyHlsManifestsList</a>

---

##### `lowLatencyHlsManifestUrls`<sup>Required</sup> <a name="lowLatencyHlsManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls"></a>

```typescript
public readonly lowLatencyHlsManifestUrls: string[];
```

- *Type:* string[]

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `mssManifests`<sup>Required</sup> <a name="mssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifests"></a>

```typescript
public readonly mssManifests: Mediapackagev2OriginEndpointMssManifestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList">Mediapackagev2OriginEndpointMssManifestsList</a>

---

##### `mssManifestUrls`<sup>Required</sup> <a name="mssManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestUrls"></a>

```typescript
public readonly mssManifestUrls: string[];
```

- *Type:* string[]

---

##### `segment`<sup>Required</sup> <a name="segment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segment"></a>

```typescript
public readonly segment: Mediapackagev2OriginEndpointSegmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference">Mediapackagev2OriginEndpointSegmentOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tags"></a>

```typescript
public readonly tags: Mediapackagev2OriginEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList">Mediapackagev2OriginEndpointTagsList</a>

---

##### `channelGroupNameInput`<sup>Optional</sup> <a name="channelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupNameInput"></a>

```typescript
public readonly channelGroupNameInput: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerTypeInput"></a>

```typescript
public readonly containerTypeInput: string;
```

- *Type:* string

---

##### `dashManifestsInput`<sup>Optional</sup> <a name="dashManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestsInput"></a>

```typescript
public readonly dashManifestsInput: IResolvable | Mediapackagev2OriginEndpointDashManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forceEndpointErrorConfigurationInput`<sup>Optional</sup> <a name="forceEndpointErrorConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfigurationInput"></a>

```typescript
public readonly forceEndpointErrorConfigurationInput: IResolvable | Mediapackagev2OriginEndpointForceEndpointErrorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---

##### `hlsManifestsInput`<sup>Optional</sup> <a name="hlsManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestsInput"></a>

```typescript
public readonly hlsManifestsInput: IResolvable | Mediapackagev2OriginEndpointHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]

---

##### `lowLatencyHlsManifestsInput`<sup>Optional</sup> <a name="lowLatencyHlsManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestsInput"></a>

```typescript
public readonly lowLatencyHlsManifestsInput: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]

---

##### `mssManifestsInput`<sup>Optional</sup> <a name="mssManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestsInput"></a>

```typescript
public readonly mssManifestsInput: IResolvable | Mediapackagev2OriginEndpointMssManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]

---

##### `originEndpointNameInput`<sup>Optional</sup> <a name="originEndpointNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointNameInput"></a>

```typescript
public readonly originEndpointNameInput: string;
```

- *Type:* string

---

##### `segmentInput`<sup>Optional</sup> <a name="segmentInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segmentInput"></a>

```typescript
public readonly segmentInput: IResolvable | Mediapackagev2OriginEndpointSegment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

---

##### `startoverWindowSecondsInput`<sup>Optional</sup> <a name="startoverWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSecondsInput"></a>

```typescript
public readonly startoverWindowSecondsInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Mediapackagev2OriginEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]

---

##### `uriSeparatorInput`<sup>Optional</sup> <a name="uriSeparatorInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparatorInput"></a>

```typescript
public readonly uriSeparatorInput: string;
```

- *Type:* string

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

---

##### `startoverWindowSeconds`<sup>Required</sup> <a name="startoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

---

##### `uriSeparator`<sup>Required</sup> <a name="uriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparator"></a>

```typescript
public readonly uriSeparator: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2OriginEndpointConfig <a name="Mediapackagev2OriginEndpointConfig" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointConfig: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#channel_group_name Mediapackagev2OriginEndpoint#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#channel_name Mediapackagev2OriginEndpoint#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.containerType">containerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#container_type Mediapackagev2OriginEndpoint#container_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#origin_endpoint_name Mediapackagev2OriginEndpoint#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dashManifests">dashManifests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]</code> | <p>A DASH manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.description">description</a></code> | <code>string</code> | <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forceEndpointErrorConfiguration">forceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | <p>The failover settings for the endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.hlsManifests">hlsManifests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]</code> | <p>An HTTP live streaming (HLS) manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lowLatencyHlsManifests">lowLatencyHlsManifests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]</code> | <p>A low-latency HLS manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.mssManifests">mssManifests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]</code> | <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.segment">segment</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a></code> | <p>The segment configuration, including the segment name, duration, and other configuration values.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.startoverWindowSeconds">startoverWindowSeconds</a></code> | <code>number</code> | <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#tags Mediapackagev2OriginEndpoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.uriSeparator">uriSeparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_separator Mediapackagev2OriginEndpoint#uri_separator}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#channel_group_name Mediapackagev2OriginEndpoint#channel_group_name}.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#channel_name Mediapackagev2OriginEndpoint#channel_name}.

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.containerType"></a>

```typescript
public readonly containerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#container_type Mediapackagev2OriginEndpoint#container_type}.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#origin_endpoint_name Mediapackagev2OriginEndpoint#origin_endpoint_name}.

---

##### `dashManifests`<sup>Optional</sup> <a name="dashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dashManifests"></a>

```typescript
public readonly dashManifests: IResolvable | Mediapackagev2OriginEndpointDashManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]

<p>A DASH manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#dash_manifests Mediapackagev2OriginEndpoint#dash_manifests}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

<p>Enter any descriptive text that helps you to identify the origin endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#description Mediapackagev2OriginEndpoint#description}

---

##### `forceEndpointErrorConfiguration`<sup>Optional</sup> <a name="forceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forceEndpointErrorConfiguration"></a>

```typescript
public readonly forceEndpointErrorConfiguration: Mediapackagev2OriginEndpointForceEndpointErrorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

<p>The failover settings for the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#force_endpoint_error_configuration Mediapackagev2OriginEndpoint#force_endpoint_error_configuration}

---

##### `hlsManifests`<sup>Optional</sup> <a name="hlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.hlsManifests"></a>

```typescript
public readonly hlsManifests: IResolvable | Mediapackagev2OriginEndpointHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]

<p>An HTTP live streaming (HLS) manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#hls_manifests Mediapackagev2OriginEndpoint#hls_manifests}

---

##### `lowLatencyHlsManifests`<sup>Optional</sup> <a name="lowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lowLatencyHlsManifests"></a>

```typescript
public readonly lowLatencyHlsManifests: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]

<p>A low-latency HLS manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#low_latency_hls_manifests Mediapackagev2OriginEndpoint#low_latency_hls_manifests}

---

##### `mssManifests`<sup>Optional</sup> <a name="mssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.mssManifests"></a>

```typescript
public readonly mssManifests: IResolvable | Mediapackagev2OriginEndpointMssManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]

<p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#mss_manifests Mediapackagev2OriginEndpoint#mss_manifests}

---

##### `segment`<sup>Optional</sup> <a name="segment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.segment"></a>

```typescript
public readonly segment: Mediapackagev2OriginEndpointSegment;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

<p>The segment configuration, including the segment name, duration, and other configuration values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#segment Mediapackagev2OriginEndpoint#segment}

---

##### `startoverWindowSeconds`<sup>Optional</sup> <a name="startoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.startoverWindowSeconds"></a>

```typescript
public readonly startoverWindowSeconds: number;
```

- *Type:* number

<p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing.

Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#startover_window_seconds Mediapackagev2OriginEndpoint#startover_window_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Mediapackagev2OriginEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#tags Mediapackagev2OriginEndpoint#tags}.

---

##### `uriSeparator`<sup>Optional</sup> <a name="uriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.uriSeparator"></a>

```typescript
public readonly uriSeparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_separator Mediapackagev2OriginEndpoint#uri_separator}.

---

### Mediapackagev2OriginEndpointDashManifests <a name="Mediapackagev2OriginEndpointDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifests: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.audioTimelinePattern">audioTimelinePattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#audio_timeline_pattern Mediapackagev2OriginEndpoint#audio_timeline_pattern}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.availabilityStartTimeConfiguration">availabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | <p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD). |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.baseUrls">baseUrls</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]</code> | <p>The base URL to use for retrieving segments.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.compactness">compactness</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#compactness Mediapackagev2OriginEndpoint#compactness}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.drmSignaling">drmSignaling</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_signaling Mediapackagev2OriginEndpoint#drm_signaling}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.dvbSettings">dvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | <p>For endpoints that use the DVB-DASH profile only. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestName">manifestName</a></code> | <code>string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>number</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.periodTriggers">periodTriggers</a></code> | <code>string[]</code> | <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.profiles">profiles</a></code> | <code>string[]</code> | <p>The profile that the output is compliant with.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.programInformation">programInformation</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.scteDash">scteDash</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.segmentTemplateFormat">segmentTemplateFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#segment_template_format Mediapackagev2OriginEndpoint#segment_template_format}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.subtitleConfiguration">subtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | <p>The configuration for DASH subtitles.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>number</code> | <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.uriPathType">uriPathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.utcTiming">utcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>. |

---

##### `audioTimelinePattern`<sup>Optional</sup> <a name="audioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.audioTimelinePattern"></a>

```typescript
public readonly audioTimelinePattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#audio_timeline_pattern Mediapackagev2OriginEndpoint#audio_timeline_pattern}.

---

##### `availabilityStartTimeConfiguration`<sup>Optional</sup> <a name="availabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.availabilityStartTimeConfiguration"></a>

```typescript
public readonly availabilityStartTimeConfiguration: Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

<p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD).

Use this configuration to set a custom availability start time for your DASH manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#availability_start_time_configuration Mediapackagev2OriginEndpoint#availability_start_time_configuration}

---

##### `baseUrls`<sup>Optional</sup> <a name="baseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.baseUrls"></a>

```typescript
public readonly baseUrls: IResolvable | Mediapackagev2OriginEndpointDashManifestsBaseUrls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]

<p>The base URL to use for retrieving segments.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#base_urls Mediapackagev2OriginEndpoint#base_urls}

---

##### `compactness`<sup>Optional</sup> <a name="compactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.compactness"></a>

```typescript
public readonly compactness: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#compactness Mediapackagev2OriginEndpoint#compactness}.

---

##### `drmSignaling`<sup>Optional</sup> <a name="drmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.drmSignaling"></a>

```typescript
public readonly drmSignaling: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_signaling Mediapackagev2OriginEndpoint#drm_signaling}.

---

##### `dvbSettings`<sup>Optional</sup> <a name="dvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.dvbSettings"></a>

```typescript
public readonly dvbSettings: Mediapackagev2OriginEndpointDashManifestsDvbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

<p>For endpoints that use the DVB-DASH profile only.

The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#dvb_settings Mediapackagev2OriginEndpoint#dvb_settings}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointDashManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

<p>A short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `minBufferTimeSeconds`<sup>Optional</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

<p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#min_buffer_time_seconds Mediapackagev2OriginEndpoint#min_buffer_time_seconds}

---

##### `minUpdatePeriodSeconds`<sup>Optional</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minUpdatePeriodSeconds"></a>

```typescript
public readonly minUpdatePeriodSeconds: number;
```

- *Type:* number

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#min_update_period_seconds Mediapackagev2OriginEndpoint#min_update_period_seconds}

---

##### `periodTriggers`<sup>Optional</sup> <a name="periodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.periodTriggers"></a>

```typescript
public readonly periodTriggers: string[];
```

- *Type:* string[]

<p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods.

Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#period_triggers Mediapackagev2OriginEndpoint#period_triggers}

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

<p>The profile that the output is compliant with.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#profiles Mediapackagev2OriginEndpoint#profiles}

---

##### `programInformation`<sup>Optional</sup> <a name="programInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.programInformation"></a>

```typescript
public readonly programInformation: Mediapackagev2OriginEndpointDashManifestsProgramInformation;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

<p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#program_information Mediapackagev2OriginEndpoint#program_information}

---

##### `scteDash`<sup>Optional</sup> <a name="scteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.scteDash"></a>

```typescript
public readonly scteDash: Mediapackagev2OriginEndpointDashManifestsScteDash;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_dash Mediapackagev2OriginEndpoint#scte_dash}

---

##### `segmentTemplateFormat`<sup>Optional</sup> <a name="segmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.segmentTemplateFormat"></a>

```typescript
public readonly segmentTemplateFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#segment_template_format Mediapackagev2OriginEndpoint#segment_template_format}.

---

##### `subtitleConfiguration`<sup>Optional</sup> <a name="subtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.subtitleConfiguration"></a>

```typescript
public readonly subtitleConfiguration: Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

<p>The configuration for DASH subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#subtitle_configuration Mediapackagev2OriginEndpoint#subtitle_configuration}

---

##### `suggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.suggestedPresentationDelaySeconds"></a>

```typescript
public readonly suggestedPresentationDelaySeconds: number;
```

- *Type:* number

<p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#suggested_presentation_delay_seconds Mediapackagev2OriginEndpoint#suggested_presentation_delay_seconds}

---

##### `uriPathType`<sup>Optional</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `utcTiming`<sup>Optional</sup> <a name="utcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.utcTiming"></a>

```typescript
public readonly utcTiming: Mediapackagev2OriginEndpointDashManifestsUtcTiming;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

<p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#utc_timing Mediapackagev2OriginEndpoint#utc_timing}

---

### Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.property.fixedAvailabilityStartTime">fixedAvailabilityStartTime</a></code> | <code>string</code> | <p>The fixed availability start time for the DASH manifest, in ISO 8601 date-time format. |

---

##### `fixedAvailabilityStartTime`<sup>Optional</sup> <a name="fixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.property.fixedAvailabilityStartTime"></a>

```typescript
public readonly fixedAvailabilityStartTime: string;
```

- *Type:* string

<p>The fixed availability start time for the DASH manifest, in ISO 8601 date-time format.

The value must have hourly granularity, meaning that the minutes, seconds, and fractional seconds must be zero. The value must be on or after <code>2024-01-01T00:00:00Z</code> and must be at least 14 days before the current time.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#fixed_availability_start_time Mediapackagev2OriginEndpoint#fixed_availability_start_time}

---

### Mediapackagev2OriginEndpointDashManifestsBaseUrls <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsBaseUrls: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbPriority">dvbPriority</a></code> | <code>number</code> | <p>For use with DVB-DASH profiles only. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbWeight">dvbWeight</a></code> | <code>number</code> | <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.serviceLocation">serviceLocation</a></code> | <code>string</code> | <p>The name of the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.url">url</a></code> | <code>string</code> | <p>A source location for segments.</p>. |

---

##### `dvbPriority`<sup>Optional</sup> <a name="dvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbPriority"></a>

```typescript
public readonly dvbPriority: number;
```

- *Type:* number

<p>For use with DVB-DASH profiles only.

The priority of this location for servings segments. The lower the number, the higher the priority.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#dvb_priority Mediapackagev2OriginEndpoint#dvb_priority}

---

##### `dvbWeight`<sup>Optional</sup> <a name="dvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbWeight"></a>

```typescript
public readonly dvbWeight: number;
```

- *Type:* number

<p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#dvb_weight Mediapackagev2OriginEndpoint#dvb_weight}

---

##### `serviceLocation`<sup>Optional</sup> <a name="serviceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.serviceLocation"></a>

```typescript
public readonly serviceLocation: string;
```

- *Type:* string

<p>The name of the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#service_location Mediapackagev2OriginEndpoint#service_location}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

<p>A source location for segments.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettings <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsDvbSettings: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.errorMetrics">errorMetrics</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]</code> | <p>Playback device error reporting settings.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.fontDownload">fontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | <p>For use with DVB-DASH profiles only. |

---

##### `errorMetrics`<sup>Optional</sup> <a name="errorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.errorMetrics"></a>

```typescript
public readonly errorMetrics: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]

<p>Playback device error reporting settings.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#error_metrics Mediapackagev2OriginEndpoint#error_metrics}

---

##### `fontDownload`<sup>Optional</sup> <a name="fontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.fontDownload"></a>

```typescript
public readonly fontDownload: Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

<p>For use with DVB-DASH profiles only.

The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#font_download Mediapackagev2OriginEndpoint#font_download}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.probability">probability</a></code> | <code>number</code> | <p>The number of playback devices per 1000 that will send error reports to the reporting URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.reportingUrl">reportingUrl</a></code> | <code>string</code> | <p>The URL where playback devices send error reports.</p>. |

---

##### `probability`<sup>Optional</sup> <a name="probability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.probability"></a>

```typescript
public readonly probability: number;
```

- *Type:* number

<p>The number of playback devices per 1000 that will send error reports to the reporting URL.

This represents the probability that a playback device will be a reporting player for this session.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#probability Mediapackagev2OriginEndpoint#probability}

---

##### `reportingUrl`<sup>Optional</sup> <a name="reportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.reportingUrl"></a>

```typescript
public readonly reportingUrl: string;
```

- *Type:* string

<p>The URL where playback devices send error reports.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#reporting_url Mediapackagev2OriginEndpoint#reporting_url}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.fontFamily">fontFamily</a></code> | <code>string</code> | <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.mimeType">mimeType</a></code> | <code>string</code> | <p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.url">url</a></code> | <code>string</code> | <p>The URL for downloading fonts for subtitles.</p>. |

---

##### `fontFamily`<sup>Optional</sup> <a name="fontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

<p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#font_family Mediapackagev2OriginEndpoint#font_family}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

<p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#mime_type Mediapackagev2OriginEndpoint#mime_type}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

<p>The URL for downloading fonts for subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointDashManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsFilterConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.drmSettings">drmSettings</a></code> | <code>string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.end">end</a></code> | <code>string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.start">start</a></code> | <code>string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `clipStartTime`<sup>Optional</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `drmSettings`<sup>Optional</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `manifestFilter`<sup>Optional</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointDashManifestsProgramInformation <a name="Mediapackagev2OriginEndpointDashManifestsProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsProgramInformation: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.copyright">copyright</a></code> | <code>string</code> | <p>A copyright statement about the content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.languageCode">languageCode</a></code> | <code>string</code> | <p>The language code for this manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.moreInformationUrl">moreInformationUrl</a></code> | <code>string</code> | <p>An absolute URL that contains more information about this content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.source">source</a></code> | <code>string</code> | <p>Information about the content provider.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.title">title</a></code> | <code>string</code> | <p>The title for the manifest.</p>. |

---

##### `copyright`<sup>Optional</sup> <a name="copyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.copyright"></a>

```typescript
public readonly copyright: string;
```

- *Type:* string

<p>A copyright statement about the content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#copyright Mediapackagev2OriginEndpoint#copyright}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

<p>The language code for this manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#language_code Mediapackagev2OriginEndpoint#language_code}

---

##### `moreInformationUrl`<sup>Optional</sup> <a name="moreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.moreInformationUrl"></a>

```typescript
public readonly moreInformationUrl: string;
```

- *Type:* string

<p>An absolute URL that contains more information about this content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#more_information_url Mediapackagev2OriginEndpoint#more_information_url}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

<p>Information about the content provider.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#source Mediapackagev2OriginEndpoint#source}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

<p>The title for the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#title Mediapackagev2OriginEndpoint#title}

---

### Mediapackagev2OriginEndpointDashManifestsScteDash <a name="Mediapackagev2OriginEndpointDashManifestsScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsScteDash: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.adMarkerDash">adMarkerDash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_dash Mediapackagev2OriginEndpoint#ad_marker_dash}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `adMarkerDash`<sup>Optional</sup> <a name="adMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.adMarkerDash"></a>

```typescript
public readonly adMarkerDash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_dash Mediapackagev2OriginEndpoint#ad_marker_dash}.

---

##### `scteInManifests`<sup>Optional</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.property.ttmlConfiguration">ttmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | <p>The settings for TTML subtitles.</p>. |

---

##### `ttmlConfiguration`<sup>Optional</sup> <a name="ttmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.property.ttmlConfiguration"></a>

```typescript
public readonly ttmlConfiguration: Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

<p>The settings for TTML subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ttml_configuration Mediapackagev2OriginEndpoint#ttml_configuration}

---

### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.property.ttmlProfile">ttmlProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ttml_profile Mediapackagev2OriginEndpoint#ttml_profile}. |

---

##### `ttmlProfile`<sup>Optional</sup> <a name="ttmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.property.ttmlProfile"></a>

```typescript
public readonly ttmlProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ttml_profile Mediapackagev2OriginEndpoint#ttml_profile}.

---

### Mediapackagev2OriginEndpointDashManifestsUtcTiming <a name="Mediapackagev2OriginEndpointDashManifestsUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointDashManifestsUtcTiming: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingMode">timingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#timing_mode Mediapackagev2OriginEndpoint#timing_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingSource">timingSource</a></code> | <code>string</code> | <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>. |

---

##### `timingMode`<sup>Optional</sup> <a name="timingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingMode"></a>

```typescript
public readonly timingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#timing_mode Mediapackagev2OriginEndpoint#timing_mode}.

---

##### `timingSource`<sup>Optional</sup> <a name="timingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingSource"></a>

```typescript
public readonly timingSource: string;
```

- *Type:* string

<p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#timing_source Mediapackagev2OriginEndpoint#timing_source}

---

### Mediapackagev2OriginEndpointForceEndpointErrorConfiguration <a name="Mediapackagev2OriginEndpointForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointForceEndpointErrorConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.property.endpointErrorConditions">endpointErrorConditions</a></code> | <code>string[]</code> | <p>The failover conditions for the endpoint. |

---

##### `endpointErrorConditions`<sup>Optional</sup> <a name="endpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.property.endpointErrorConditions"></a>

```typescript
public readonly endpointErrorConditions: string[];
```

- *Type:* string[]

<p>The failover conditions for the endpoint.

The options are:</p> <ul> <li> <p> <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p> </li> <li> <p> <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p> </li> </ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#endpoint_error_conditions Mediapackagev2OriginEndpoint#endpoint_error_conditions}

---

### Mediapackagev2OriginEndpointHlsManifests <a name="Mediapackagev2OriginEndpointHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointHlsManifests: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.childManifestName">childManifestName</a></code> | <code>string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestName">manifestName</a></code> | <code>string</code> | <p>A short short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.uriPathType">uriPathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.url">url</a></code> | <code>string</code> | <p>The egress domain URL for stream delivery from MediaPackage.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. |

---

##### `childManifestName`<sup>Optional</sup> <a name="childManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

<p>A short string that's appended to the endpoint URL.

The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name Mediapackagev2OriginEndpoint#child_manifest_name}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

<p>A short short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify.

If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds Mediapackagev2OriginEndpoint#program_date_time_interval_seconds}

---

##### `scteHls`<sup>Optional</sup> <a name="scteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.scteHls"></a>

```typescript
public readonly scteHls: Mediapackagev2OriginEndpointHlsManifestsScteHls;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls Mediapackagev2OriginEndpoint#scte_hls}

---

##### `startTag`<sup>Optional</sup> <a name="startTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.startTag"></a>

```typescript
public readonly startTag: Mediapackagev2OriginEndpointHlsManifestsStartTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset.

When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start_tag Mediapackagev2OriginEndpoint#start_tag}

---

##### `uriPathType`<sup>Optional</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

<p>The egress domain URL for stream delivery from MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

##### `urlEncodeChildManifest`<sup>Optional</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.

For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest Mediapackagev2OriginEndpoint#url_encode_child_manifest}

---

### Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointHlsManifestsFilterConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.drmSettings">drmSettings</a></code> | <code>string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.end">end</a></code> | <code>string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.start">start</a></code> | <code>string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `clipStartTime`<sup>Optional</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `drmSettings`<sup>Optional</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `manifestFilter`<sup>Optional</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointHlsManifestsScteHls <a name="Mediapackagev2OriginEndpointHlsManifestsScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointHlsManifestsScteHls: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `adMarkerHls`<sup>Optional</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}.

---

##### `scteInManifests`<sup>Optional</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointHlsManifestsStartTag <a name="Mediapackagev2OriginEndpointHlsManifestsStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointHlsManifestsStartTag: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.precise">precise</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>Specify the value for PRECISE within your EXT-X-START tag. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.timeOffset">timeOffset</a></code> | <code>number</code> | <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. |

---

##### `precise`<sup>Optional</sup> <a name="precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.precise"></a>

```typescript
public readonly precise: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>Specify the value for PRECISE within your EXT-X-START tag.

Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#precise Mediapackagev2OriginEndpoint#precise}

---

##### `timeOffset`<sup>Optional</sup> <a name="timeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

<p>Specify the value for TIME-OFFSET within your EXT-X-START tag.

Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_offset Mediapackagev2OriginEndpoint#time_offset}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifests <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointLowLatencyHlsManifests: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.childManifestName">childManifestName</a></code> | <code>string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestName">manifestName</a></code> | <code>string</code> | <p>A short short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.uriPathType">uriPathType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.url">url</a></code> | <code>string</code> | <p>The egress domain URL for stream delivery from MediaPackage.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. |

---

##### `childManifestName`<sup>Optional</sup> <a name="childManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

<p>A short string that's appended to the endpoint URL.

The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name Mediapackagev2OriginEndpoint#child_manifest_name}

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

<p>A short short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `programDateTimeIntervalSeconds`<sup>Optional</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify.

If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds Mediapackagev2OriginEndpoint#program_date_time_interval_seconds}

---

##### `scteHls`<sup>Optional</sup> <a name="scteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.scteHls"></a>

```typescript
public readonly scteHls: Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls Mediapackagev2OriginEndpoint#scte_hls}

---

##### `startTag`<sup>Optional</sup> <a name="startTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.startTag"></a>

```typescript
public readonly startTag: Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset.

When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start_tag Mediapackagev2OriginEndpoint#start_tag}

---

##### `uriPathType`<sup>Optional</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

<p>The egress domain URL for stream delivery from MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

##### `urlEncodeChildManifest`<sup>Optional</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.

For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest Mediapackagev2OriginEndpoint#url_encode_child_manifest}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.drmSettings">drmSettings</a></code> | <code>string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.end">end</a></code> | <code>string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.start">start</a></code> | <code>string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `clipStartTime`<sup>Optional</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `drmSettings`<sup>Optional</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `manifestFilter`<sup>Optional</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `adMarkerHls`<sup>Optional</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}.

---

##### `scteInManifests`<sup>Optional</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.precise">precise</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>Specify the value for PRECISE within your EXT-X-START tag. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.timeOffset">timeOffset</a></code> | <code>number</code> | <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. |

---

##### `precise`<sup>Optional</sup> <a name="precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.precise"></a>

```typescript
public readonly precise: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>Specify the value for PRECISE within your EXT-X-START tag.

Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#precise Mediapackagev2OriginEndpoint#precise}

---

##### `timeOffset`<sup>Optional</sup> <a name="timeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

<p>Specify the value for TIME-OFFSET within your EXT-X-START tag.

Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_offset Mediapackagev2OriginEndpoint#time_offset}

---

### Mediapackagev2OriginEndpointMssManifests <a name="Mediapackagev2OriginEndpointMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointMssManifests: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestLayout">manifestLayout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_layout Mediapackagev2OriginEndpoint#manifest_layout}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestName">manifestName</a></code> | <code>string</code> | <p>The name of the MSS manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | <p>The duration (in seconds) of the manifest window. |

---

##### `filterConfiguration`<sup>Optional</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointMssManifestsFilterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `manifestLayout`<sup>Optional</sup> <a name="manifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestLayout"></a>

```typescript
public readonly manifestLayout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_layout Mediapackagev2OriginEndpoint#manifest_layout}.

---

##### `manifestName`<sup>Optional</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

<p>The name of the MSS manifest.

This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `manifestWindowSeconds`<sup>Optional</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

<p>The duration (in seconds) of the manifest window.

This represents the total amount of content available in the manifest at any given time.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

### Mediapackagev2OriginEndpointMssManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointMssManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointMssManifestsFilterConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.drmSettings">drmSettings</a></code> | <code>string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.end">end</a></code> | <code>string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.start">start</a></code> | <code>string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `clipStartTime`<sup>Optional</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `drmSettings`<sup>Optional</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `manifestFilter`<sup>Optional</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `timeDelaySeconds`<sup>Optional</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointSegment <a name="Mediapackagev2OriginEndpointSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegment: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a></code> | <p>The parameters for encrypting content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.includeIframeOnlyStreams">includeIframeOnlyStreams</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.outputTimestampMode">outputTimestampMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#output_timestamp_mode Mediapackagev2OriginEndpoint#output_timestamp_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.scte">scte</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | <p>The duration (in seconds) of each segment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentName">segmentName</a></code> | <code>string</code> | <p>The name that describes the segment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsIncludeDvbSubtitles">tsIncludeDvbSubtitles</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsUseAudioRenditionGroup">tsUseAudioRenditionGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>When selected, MediaPackage bundles all audio tracks in a rendition group. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.encryption"></a>

```typescript
public readonly encryption: Mediapackagev2OriginEndpointSegmentEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

<p>The parameters for encrypting content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#encryption Mediapackagev2OriginEndpoint#encryption}

---

##### `includeIframeOnlyStreams`<sup>Optional</sup> <a name="includeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.includeIframeOnlyStreams"></a>

```typescript
public readonly includeIframeOnlyStreams: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks.

If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#include_iframe_only_streams Mediapackagev2OriginEndpoint#include_iframe_only_streams}

---

##### `outputTimestampMode`<sup>Optional</sup> <a name="outputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.outputTimestampMode"></a>

```typescript
public readonly outputTimestampMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#output_timestamp_mode Mediapackagev2OriginEndpoint#output_timestamp_mode}.

---

##### `scte`<sup>Optional</sup> <a name="scte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.scte"></a>

```typescript
public readonly scte: Mediapackagev2OriginEndpointSegmentScte;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte Mediapackagev2OriginEndpoint#scte}

---

##### `segmentDurationSeconds`<sup>Optional</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

<p>The duration (in seconds) of each segment.

Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#segment_duration_seconds Mediapackagev2OriginEndpoint#segment_duration_seconds}

---

##### `segmentName`<sup>Optional</sup> <a name="segmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

<p>The name that describes the segment.

The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#segment_name Mediapackagev2OriginEndpoint#segment_name}

---

##### `tsIncludeDvbSubtitles`<sup>Optional</sup> <a name="tsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsIncludeDvbSubtitles"></a>

```typescript
public readonly tsIncludeDvbSubtitles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output.

When selected, MediaPackage passes through DVB subtitles into the output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ts_include_dvb_subtitles Mediapackagev2OriginEndpoint#ts_include_dvb_subtitles}

---

##### `tsUseAudioRenditionGroup`<sup>Optional</sup> <a name="tsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsUseAudioRenditionGroup"></a>

```typescript
public readonly tsUseAudioRenditionGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>When selected, MediaPackage bundles all audio tracks in a rendition group.

All other tracks in the stream can be used with any audio rendition from the group.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ts_use_audio_rendition_group Mediapackagev2OriginEndpoint#ts_use_audio_rendition_group}

---

### Mediapackagev2OriginEndpointSegmentEncryption <a name="Mediapackagev2OriginEndpointSegmentEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegmentEncryption: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.cmafExcludeSegmentDrmMetadata">cmafExcludeSegmentDrmMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> \| <code>false</code> </p> <p>Default: <code>false</code> </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.encryptionMethod">encryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | <p>The encryption type.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.keyRotationIntervalSeconds">keyRotationIntervalSeconds</a></code> | <code>number</code> | <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | <p>The parameters for the SPEKE key provider.</p>. |

---

##### `cmafExcludeSegmentDrmMetadata`<sup>Optional</sup> <a name="cmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.cmafExcludeSegmentDrmMetadata"></a>

```typescript
public readonly cmafExcludeSegmentDrmMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

<p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_exclude_segment_drm_metadata Mediapackagev2OriginEndpoint#cmaf_exclude_segment_drm_metadata}

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

<p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content.

If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#constant_initialization_vector Mediapackagev2OriginEndpoint#constant_initialization_vector}

---

##### `encryptionMethod`<sup>Optional</sup> <a name="encryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.encryptionMethod"></a>

```typescript
public readonly encryptionMethod: Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

<p>The encryption type.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#encryption_method Mediapackagev2OriginEndpoint#encryption_method}

---

##### `keyRotationIntervalSeconds`<sup>Optional</sup> <a name="keyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.keyRotationIntervalSeconds"></a>

```typescript
public readonly keyRotationIntervalSeconds: number;
```

- *Type:* number

<p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time.

The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#key_rotation_interval_seconds Mediapackagev2OriginEndpoint#key_rotation_interval_seconds}

---

##### `spekeKeyProvider`<sup>Optional</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

<p>The parameters for the SPEKE key provider.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#speke_key_provider Mediapackagev2OriginEndpoint#speke_key_provider}

---

### Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod <a name="Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.cmafEncryptionMethod">cmafEncryptionMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_encryption_method Mediapackagev2OriginEndpoint#cmaf_encryption_method}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.ismEncryptionMethod">ismEncryptionMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ism_encryption_method Mediapackagev2OriginEndpoint#ism_encryption_method}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.tsEncryptionMethod">tsEncryptionMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ts_encryption_method Mediapackagev2OriginEndpoint#ts_encryption_method}. |

---

##### `cmafEncryptionMethod`<sup>Optional</sup> <a name="cmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.cmafEncryptionMethod"></a>

```typescript
public readonly cmafEncryptionMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_encryption_method Mediapackagev2OriginEndpoint#cmaf_encryption_method}.

---

##### `ismEncryptionMethod`<sup>Optional</sup> <a name="ismEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.ismEncryptionMethod"></a>

```typescript
public readonly ismEncryptionMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ism_encryption_method Mediapackagev2OriginEndpoint#ism_encryption_method}.

---

##### `tsEncryptionMethod`<sup>Optional</sup> <a name="tsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.tsEncryptionMethod"></a>

```typescript
public readonly tsEncryptionMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#ts_encryption_method Mediapackagev2OriginEndpoint#ts_encryption_method}.

---

### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.certificateArn">certificateArn</a></code> | <code>string</code> | <p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.drmSystems">drmSystems</a></code> | <code>string[]</code> | <p>The DRM solution provider you're using to protect your content during distribution.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.resourceId">resourceId</a></code> | <code>string</code> | <p>The unique identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.roleArn">roleArn</a></code> | <code>string</code> | <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.url">url</a></code> | <code>string</code> | <p>The URL of the API Gateway proxy that you set up to talk to your key server. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

<p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint.

For this feature to work, your DRM key provider must support content key encryption.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#certificate_arn Mediapackagev2OriginEndpoint#certificate_arn}

---

##### `drmSystems`<sup>Optional</sup> <a name="drmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.drmSystems"></a>

```typescript
public readonly drmSystems: string[];
```

- *Type:* string[]

<p>The DRM solution provider you're using to protect your content during distribution.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#drm_systems Mediapackagev2OriginEndpoint#drm_systems}

---

##### `encryptionContractConfiguration`<sup>Optional</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

<p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#encryption_contract_configuration Mediapackagev2OriginEndpoint#encryption_contract_configuration}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

<p>The unique identifier for the content.

The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: <code>MovieNight20171126093045</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#resource_id Mediapackagev2OriginEndpoint#resource_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

<p>The ARN for the IAM role granted by the key provider that provides access to the key provider API.

This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#role_arn Mediapackagev2OriginEndpoint#role_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

<p>The URL of the API Gateway proxy that you set up to talk to your key server.

The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_audio Mediapackagev2OriginEndpoint#preset_speke_20_audio}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_video Mediapackagev2OriginEndpoint#preset_speke_20_video}. |

---

##### `presetSpeke20Audio`<sup>Optional</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_audio Mediapackagev2OriginEndpoint#preset_speke_20_audio}.

---

##### `presetSpeke20Video`<sup>Optional</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_video Mediapackagev2OriginEndpoint#preset_speke_20_video}.

---

### Mediapackagev2OriginEndpointSegmentScte <a name="Mediapackagev2OriginEndpointSegmentScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointSegmentScte: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.customAdTypes">customAdTypes</a></code> | <code>string[]</code> | <p>A list of additional non-Ad SCTE-35 event types to treat as advertisements. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteFilter">scteFilter</a></code> | <code>string[]</code> | <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteInSegments">scteInSegments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_segments Mediapackagev2OriginEndpoint#scte_in_segments}. |

---

##### `customAdTypes`<sup>Optional</sup> <a name="customAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.customAdTypes"></a>

```typescript
public readonly customAdTypes: string[];
```

- *Type:* string[]

<p>A list of additional non-Ad SCTE-35 event types to treat as advertisements.

When configured, events matching these types produce ad markers (such as <code>SCTE35-OUT</code> and <code>SCTE35-IN</code> in HLS DATERANGE tags) in manifests.</p> <p>Valid values: <code>PROGRAM</code> | <code>CHAPTER</code> | <code>UNSCHEDULED_EVENT</code> | <code>ALTERNATE_CONTENT_OPPORTUNITY</code> | <code>NETWORK</code> </p> <p>If you don't specify any values, the default is empty (only default ad types are used).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#custom_ad_types Mediapackagev2OriginEndpoint#custom_ad_types}

---

##### `scteFilter`<sup>Optional</sup> <a name="scteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteFilter"></a>

```typescript
public readonly scteFilter: string[];
```

- *Type:* string[]

<p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_filter Mediapackagev2OriginEndpoint#scte_filter}

---

##### `scteInSegments`<sup>Optional</sup> <a name="scteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteInSegments"></a>

```typescript
public readonly scteInSegments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_segments Mediapackagev2OriginEndpoint#scte_in_segments}.

---

### Mediapackagev2OriginEndpointTags <a name="Mediapackagev2OriginEndpointTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

const mediapackagev2OriginEndpointTags: mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#key Mediapackagev2OriginEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#value Mediapackagev2OriginEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#key Mediapackagev2OriginEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackagev2_origin_endpoint#value Mediapackagev2OriginEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resetFixedAvailabilityStartTime">resetFixedAvailabilityStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFixedAvailabilityStartTime` <a name="resetFixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resetFixedAvailabilityStartTime"></a>

```typescript
public resetFixedAvailabilityStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTimeInput">fixedAvailabilityStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime">fixedAvailabilityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixedAvailabilityStartTimeInput`<sup>Optional</sup> <a name="fixedAvailabilityStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTimeInput"></a>

```typescript
public readonly fixedAvailabilityStartTimeInput: string;
```

- *Type:* string

---

##### `fixedAvailabilityStartTime`<sup>Required</sup> <a name="fixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime"></a>

```typescript
public readonly fixedAvailabilityStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---


### Mediapackagev2OriginEndpointDashManifestsBaseUrlsList <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrlsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsBaseUrls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]

---


### Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbPriority">resetDvbPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbWeight">resetDvbWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetServiceLocation">resetServiceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDvbPriority` <a name="resetDvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbPriority"></a>

```typescript
public resetDvbPriority(): void
```

##### `resetDvbWeight` <a name="resetDvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbWeight"></a>

```typescript
public resetDvbWeight(): void
```

##### `resetServiceLocation` <a name="resetServiceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetServiceLocation"></a>

```typescript
public resetServiceLocation(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriorityInput">dvbPriorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeightInput">dvbWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocationInput">serviceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority">dvbPriority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight">dvbWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation">serviceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dvbPriorityInput`<sup>Optional</sup> <a name="dvbPriorityInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriorityInput"></a>

```typescript
public readonly dvbPriorityInput: number;
```

- *Type:* number

---

##### `dvbWeightInput`<sup>Optional</sup> <a name="dvbWeightInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeightInput"></a>

```typescript
public readonly dvbWeightInput: number;
```

- *Type:* number

---

##### `serviceLocationInput`<sup>Optional</sup> <a name="serviceLocationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocationInput"></a>

```typescript
public readonly serviceLocationInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `dvbPriority`<sup>Required</sup> <a name="dvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority"></a>

```typescript
public readonly dvbPriority: number;
```

- *Type:* number

---

##### `dvbWeight`<sup>Required</sup> <a name="dvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight"></a>

```typescript
public readonly dvbWeight: number;
```

- *Type:* number

---

##### `serviceLocation`<sup>Required</sup> <a name="serviceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation"></a>

```typescript
public readonly serviceLocation: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsBaseUrls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetProbability">resetProbability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetReportingUrl">resetReportingUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProbability` <a name="resetProbability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetProbability"></a>

```typescript
public resetProbability(): void
```

##### `resetReportingUrl` <a name="resetReportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetReportingUrl"></a>

```typescript
public resetReportingUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probabilityInput">probabilityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrlInput">reportingUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability">probability</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl">reportingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `probabilityInput`<sup>Optional</sup> <a name="probabilityInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probabilityInput"></a>

```typescript
public readonly probabilityInput: number;
```

- *Type:* number

---

##### `reportingUrlInput`<sup>Optional</sup> <a name="reportingUrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrlInput"></a>

```typescript
public readonly reportingUrlInput: string;
```

- *Type:* string

---

##### `probability`<sup>Required</sup> <a name="probability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability"></a>

```typescript
public readonly probability: number;
```

- *Type:* number

---

##### `reportingUrl`<sup>Required</sup> <a name="reportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl"></a>

```typescript
public readonly reportingUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetFontFamily">resetFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFontFamily` <a name="resetFontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetFontFamily"></a>

```typescript
public resetFontFamily(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamilyInput">fontFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily">fontFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fontFamilyInput`<sup>Optional</sup> <a name="fontFamilyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamilyInput"></a>

```typescript
public readonly fontFamilyInput: string;
```

- *Type:* string

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `fontFamily`<sup>Required</sup> <a name="fontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily"></a>

```typescript
public readonly fontFamily: string;
```

- *Type:* string

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics">putErrorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload">putFontDownload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetErrorMetrics">resetErrorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetFontDownload">resetFontDownload</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putErrorMetrics` <a name="putErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics"></a>

```typescript
public putErrorMetrics(value: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]

---

##### `putFontDownload` <a name="putFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload"></a>

```typescript
public putFontDownload(value: Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---

##### `resetErrorMetrics` <a name="resetErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetErrorMetrics"></a>

```typescript
public resetErrorMetrics(): void
```

##### `resetFontDownload` <a name="resetFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetFontDownload"></a>

```typescript
public resetFontDownload(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics">errorMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload">fontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetricsInput">errorMetricsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownloadInput">fontDownloadInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMetrics`<sup>Required</sup> <a name="errorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics"></a>

```typescript
public readonly errorMetrics: Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a>

---

##### `fontDownload`<sup>Required</sup> <a name="fontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload"></a>

```typescript
public readonly fontDownload: Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a>

---

##### `errorMetricsInput`<sup>Optional</sup> <a name="errorMetricsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetricsInput"></a>

```typescript
public readonly errorMetricsInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics</a>[]

---

##### `fontDownloadInput`<sup>Optional</sup> <a name="fontDownloadInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownloadInput"></a>

```typescript
public readonly fontDownloadInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---


### Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetClipStartTime">resetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetDrmSettings">resetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetManifestFilter">resetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">resetTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClipStartTime` <a name="resetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```typescript
public resetClipStartTime(): void
```

##### `resetDrmSettings` <a name="resetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```typescript
public resetDrmSettings(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetManifestFilter` <a name="resetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```typescript
public resetManifestFilter(): void
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTimeDelaySeconds` <a name="resetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```typescript
public resetTimeDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">clipStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettingsInput">drmSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilterInput">manifestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">timeDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTimeInput`<sup>Optional</sup> <a name="clipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```typescript
public readonly clipStartTimeInput: string;
```

- *Type:* string

---

##### `drmSettingsInput`<sup>Optional</sup> <a name="drmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```typescript
public readonly drmSettingsInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `manifestFilterInput`<sup>Optional</sup> <a name="manifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```typescript
public readonly manifestFilterInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timeDelaySecondsInput`<sup>Optional</sup> <a name="timeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```typescript
public readonly timeDelaySecondsInput: number;
```

- *Type:* number

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---


### Mediapackagev2OriginEndpointDashManifestsList <a name="Mediapackagev2OriginEndpointDashManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>[]

---


### Mediapackagev2OriginEndpointDashManifestsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration">putAvailabilityStartTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls">putBaseUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings">putDvbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation">putProgramInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash">putScteDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration">putSubtitleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming">putUtcTiming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAudioTimelinePattern">resetAudioTimelinePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAvailabilityStartTimeConfiguration">resetAvailabilityStartTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetBaseUrls">resetBaseUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetCompactness">resetCompactness</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDrmSignaling">resetDrmSignaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDvbSettings">resetDvbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestName">resetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinBufferTimeSeconds">resetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinUpdatePeriodSeconds">resetMinUpdatePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetPeriodTriggers">resetPeriodTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProgramInformation">resetProgramInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetScteDash">resetScteDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSegmentTemplateFormat">resetSegmentTemplateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSubtitleConfiguration">resetSubtitleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSuggestedPresentationDelaySeconds">resetSuggestedPresentationDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUriPathType">resetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUtcTiming">resetUtcTiming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAvailabilityStartTimeConfiguration` <a name="putAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration"></a>

```typescript
public putAvailabilityStartTimeConfiguration(value: Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---

##### `putBaseUrls` <a name="putBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls"></a>

```typescript
public putBaseUrls(value: IResolvable | Mediapackagev2OriginEndpointDashManifestsBaseUrls[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]

---

##### `putDvbSettings` <a name="putDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings"></a>

```typescript
public putDvbSettings(value: Mediapackagev2OriginEndpointDashManifestsDvbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration"></a>

```typescript
public putFilterConfiguration(value: Mediapackagev2OriginEndpointDashManifestsFilterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---

##### `putProgramInformation` <a name="putProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation"></a>

```typescript
public putProgramInformation(value: Mediapackagev2OriginEndpointDashManifestsProgramInformation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---

##### `putScteDash` <a name="putScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash"></a>

```typescript
public putScteDash(value: Mediapackagev2OriginEndpointDashManifestsScteDash): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

---

##### `putSubtitleConfiguration` <a name="putSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration"></a>

```typescript
public putSubtitleConfiguration(value: Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---

##### `putUtcTiming` <a name="putUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming"></a>

```typescript
public putUtcTiming(value: Mediapackagev2OriginEndpointDashManifestsUtcTiming): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---

##### `resetAudioTimelinePattern` <a name="resetAudioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAudioTimelinePattern"></a>

```typescript
public resetAudioTimelinePattern(): void
```

##### `resetAvailabilityStartTimeConfiguration` <a name="resetAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAvailabilityStartTimeConfiguration"></a>

```typescript
public resetAvailabilityStartTimeConfiguration(): void
```

##### `resetBaseUrls` <a name="resetBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetBaseUrls"></a>

```typescript
public resetBaseUrls(): void
```

##### `resetCompactness` <a name="resetCompactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetCompactness"></a>

```typescript
public resetCompactness(): void
```

##### `resetDrmSignaling` <a name="resetDrmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDrmSignaling"></a>

```typescript
public resetDrmSignaling(): void
```

##### `resetDvbSettings` <a name="resetDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDvbSettings"></a>

```typescript
public resetDvbSettings(): void
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetFilterConfiguration"></a>

```typescript
public resetFilterConfiguration(): void
```

##### `resetManifestName` <a name="resetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestName"></a>

```typescript
public resetManifestName(): void
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```

##### `resetMinBufferTimeSeconds` <a name="resetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinBufferTimeSeconds"></a>

```typescript
public resetMinBufferTimeSeconds(): void
```

##### `resetMinUpdatePeriodSeconds` <a name="resetMinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinUpdatePeriodSeconds"></a>

```typescript
public resetMinUpdatePeriodSeconds(): void
```

##### `resetPeriodTriggers` <a name="resetPeriodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetPeriodTriggers"></a>

```typescript
public resetPeriodTriggers(): void
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProfiles"></a>

```typescript
public resetProfiles(): void
```

##### `resetProgramInformation` <a name="resetProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProgramInformation"></a>

```typescript
public resetProgramInformation(): void
```

##### `resetScteDash` <a name="resetScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetScteDash"></a>

```typescript
public resetScteDash(): void
```

##### `resetSegmentTemplateFormat` <a name="resetSegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSegmentTemplateFormat"></a>

```typescript
public resetSegmentTemplateFormat(): void
```

##### `resetSubtitleConfiguration` <a name="resetSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSubtitleConfiguration"></a>

```typescript
public resetSubtitleConfiguration(): void
```

##### `resetSuggestedPresentationDelaySeconds` <a name="resetSuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```typescript
public resetSuggestedPresentationDelaySeconds(): void
```

##### `resetUriPathType` <a name="resetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUriPathType"></a>

```typescript
public resetUriPathType(): void
```

##### `resetUtcTiming` <a name="resetUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUtcTiming"></a>

```typescript
public resetUtcTiming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration">availabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls">baseUrls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList">Mediapackagev2OriginEndpointDashManifestsBaseUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings">dvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation">programInformation</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash">scteDash</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference">Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration">subtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming">utcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePatternInput">audioTimelinePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfigurationInput">availabilityStartTimeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrlsInput">baseUrlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactnessInput">compactnessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignalingInput">drmSignalingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettingsInput">dvbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSecondsInput">minBufferTimeSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSecondsInput">minUpdatePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggersInput">periodTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profilesInput">profilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformationInput">programInformationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDashInput">scteDashInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormatInput">segmentTemplateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfigurationInput">subtitleConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySecondsInput">suggestedPresentationDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathTypeInput">uriPathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTimingInput">utcTimingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern">audioTimelinePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness">compactness</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling">drmSignaling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds">minBufferTimeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds">minUpdatePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers">periodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles">profiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat">segmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds">suggestedPresentationDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityStartTimeConfiguration`<sup>Required</sup> <a name="availabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration"></a>

```typescript
public readonly availabilityStartTimeConfiguration: Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a>

---

##### `baseUrls`<sup>Required</sup> <a name="baseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls"></a>

```typescript
public readonly baseUrls: Mediapackagev2OriginEndpointDashManifestsBaseUrlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList">Mediapackagev2OriginEndpointDashManifestsBaseUrlsList</a>

---

##### `dvbSettings`<sup>Required</sup> <a name="dvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings"></a>

```typescript
public readonly dvbSettings: Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a>

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a>

---

##### `programInformation`<sup>Required</sup> <a name="programInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation"></a>

```typescript
public readonly programInformation: Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a>

---

##### `scteDash`<sup>Required</sup> <a name="scteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash"></a>

```typescript
public readonly scteDash: Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference">Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a>

---

##### `subtitleConfiguration`<sup>Required</sup> <a name="subtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration"></a>

```typescript
public readonly subtitleConfiguration: Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a>

---

##### `utcTiming`<sup>Required</sup> <a name="utcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming"></a>

```typescript
public readonly utcTiming: Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a>

---

##### `audioTimelinePatternInput`<sup>Optional</sup> <a name="audioTimelinePatternInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePatternInput"></a>

```typescript
public readonly audioTimelinePatternInput: string;
```

- *Type:* string

---

##### `availabilityStartTimeConfigurationInput`<sup>Optional</sup> <a name="availabilityStartTimeConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfigurationInput"></a>

```typescript
public readonly availabilityStartTimeConfigurationInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---

##### `baseUrlsInput`<sup>Optional</sup> <a name="baseUrlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrlsInput"></a>

```typescript
public readonly baseUrlsInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsBaseUrls[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls">Mediapackagev2OriginEndpointDashManifestsBaseUrls</a>[]

---

##### `compactnessInput`<sup>Optional</sup> <a name="compactnessInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactnessInput"></a>

```typescript
public readonly compactnessInput: string;
```

- *Type:* string

---

##### `drmSignalingInput`<sup>Optional</sup> <a name="drmSignalingInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignalingInput"></a>

```typescript
public readonly drmSignalingInput: string;
```

- *Type:* string

---

##### `dvbSettingsInput`<sup>Optional</sup> <a name="dvbSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettingsInput"></a>

```typescript
public readonly dvbSettingsInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsDvbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfigurationInput"></a>

```typescript
public readonly filterConfigurationInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestNameInput"></a>

```typescript
public readonly manifestNameInput: string;
```

- *Type:* string

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `minBufferTimeSecondsInput`<sup>Optional</sup> <a name="minBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSecondsInput"></a>

```typescript
public readonly minBufferTimeSecondsInput: number;
```

- *Type:* number

---

##### `minUpdatePeriodSecondsInput`<sup>Optional</sup> <a name="minUpdatePeriodSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```typescript
public readonly minUpdatePeriodSecondsInput: number;
```

- *Type:* number

---

##### `periodTriggersInput`<sup>Optional</sup> <a name="periodTriggersInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggersInput"></a>

```typescript
public readonly periodTriggersInput: string[];
```

- *Type:* string[]

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profilesInput"></a>

```typescript
public readonly profilesInput: string[];
```

- *Type:* string[]

---

##### `programInformationInput`<sup>Optional</sup> <a name="programInformationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformationInput"></a>

```typescript
public readonly programInformationInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsProgramInformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---

##### `scteDashInput`<sup>Optional</sup> <a name="scteDashInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDashInput"></a>

```typescript
public readonly scteDashInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsScteDash;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

---

##### `segmentTemplateFormatInput`<sup>Optional</sup> <a name="segmentTemplateFormatInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormatInput"></a>

```typescript
public readonly segmentTemplateFormatInput: string;
```

- *Type:* string

---

##### `subtitleConfigurationInput`<sup>Optional</sup> <a name="subtitleConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfigurationInput"></a>

```typescript
public readonly subtitleConfigurationInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---

##### `suggestedPresentationDelaySecondsInput`<sup>Optional</sup> <a name="suggestedPresentationDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```typescript
public readonly suggestedPresentationDelaySecondsInput: number;
```

- *Type:* number

---

##### `uriPathTypeInput`<sup>Optional</sup> <a name="uriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathTypeInput"></a>

```typescript
public readonly uriPathTypeInput: string;
```

- *Type:* string

---

##### `utcTimingInput`<sup>Optional</sup> <a name="utcTimingInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTimingInput"></a>

```typescript
public readonly utcTimingInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsUtcTiming;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---

##### `audioTimelinePattern`<sup>Required</sup> <a name="audioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern"></a>

```typescript
public readonly audioTimelinePattern: string;
```

- *Type:* string

---

##### `compactness`<sup>Required</sup> <a name="compactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness"></a>

```typescript
public readonly compactness: string;
```

- *Type:* string

---

##### `drmSignaling`<sup>Required</sup> <a name="drmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling"></a>

```typescript
public readonly drmSignaling: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `minBufferTimeSeconds`<sup>Required</sup> <a name="minBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```typescript
public readonly minBufferTimeSeconds: number;
```

- *Type:* number

---

##### `minUpdatePeriodSeconds`<sup>Required</sup> <a name="minUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds"></a>

```typescript
public readonly minUpdatePeriodSeconds: number;
```

- *Type:* number

---

##### `periodTriggers`<sup>Required</sup> <a name="periodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers"></a>

```typescript
public readonly periodTriggers: string[];
```

- *Type:* string[]

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: string[];
```

- *Type:* string[]

---

##### `segmentTemplateFormat`<sup>Required</sup> <a name="segmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat"></a>

```typescript
public readonly segmentTemplateFormat: string;
```

- *Type:* string

---

##### `suggestedPresentationDelaySeconds`<sup>Required</sup> <a name="suggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```typescript
public readonly suggestedPresentationDelaySeconds: number;
```

- *Type:* number

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests">Mediapackagev2OriginEndpointDashManifests</a>

---


### Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetCopyright">resetCopyright</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetMoreInformationUrl">resetMoreInformationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCopyright` <a name="resetCopyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetCopyright"></a>

```typescript
public resetCopyright(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetMoreInformationUrl` <a name="resetMoreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetMoreInformationUrl"></a>

```typescript
public resetMoreInformationUrl(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyrightInput">copyrightInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrlInput">moreInformationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright">copyright</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl">moreInformationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `copyrightInput`<sup>Optional</sup> <a name="copyrightInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyrightInput"></a>

```typescript
public readonly copyrightInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `moreInformationUrlInput`<sup>Optional</sup> <a name="moreInformationUrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrlInput"></a>

```typescript
public readonly moreInformationUrlInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `copyright`<sup>Required</sup> <a name="copyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright"></a>

```typescript
public readonly copyright: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `moreInformationUrl`<sup>Required</sup> <a name="moreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl"></a>

```typescript
public readonly moreInformationUrl: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsProgramInformation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---


### Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetAdMarkerDash">resetAdMarkerDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetScteInManifests">resetScteInManifests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdMarkerDash` <a name="resetAdMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetAdMarkerDash"></a>

```typescript
public resetAdMarkerDash(): void
```

##### `resetScteInManifests` <a name="resetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetScteInManifests"></a>

```typescript
public resetScteInManifests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDashInput">adMarkerDashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifestsInput">scteInManifestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash">adMarkerDash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerDashInput`<sup>Optional</sup> <a name="adMarkerDashInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDashInput"></a>

```typescript
public readonly adMarkerDashInput: string;
```

- *Type:* string

---

##### `scteInManifestsInput`<sup>Optional</sup> <a name="scteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifestsInput"></a>

```typescript
public readonly scteInManifestsInput: string;
```

- *Type:* string

---

##### `adMarkerDash`<sup>Required</sup> <a name="adMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash"></a>

```typescript
public readonly adMarkerDash: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsScteDash;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

---


### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration">putTtmlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resetTtmlConfiguration">resetTtmlConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTtmlConfiguration` <a name="putTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration"></a>

```typescript
public putTtmlConfiguration(value: Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---

##### `resetTtmlConfiguration` <a name="resetTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resetTtmlConfiguration"></a>

```typescript
public resetTtmlConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration">ttmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfigurationInput">ttmlConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttmlConfiguration`<sup>Required</sup> <a name="ttmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration"></a>

```typescript
public readonly ttmlConfiguration: Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a>

---

##### `ttmlConfigurationInput`<sup>Optional</sup> <a name="ttmlConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfigurationInput"></a>

```typescript
public readonly ttmlConfigurationInput: IResolvable | Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---


### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resetTtmlProfile">resetTtmlProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtmlProfile` <a name="resetTtmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resetTtmlProfile"></a>

```typescript
public resetTtmlProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfileInput">ttmlProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile">ttmlProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttmlProfileInput`<sup>Optional</sup> <a name="ttmlProfileInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfileInput"></a>

```typescript
public readonly ttmlProfileInput: string;
```

- *Type:* string

---

##### `ttmlProfile`<sup>Required</sup> <a name="ttmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile"></a>

```typescript
public readonly ttmlProfile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---


### Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingMode">resetTimingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingSource">resetTimingSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimingMode` <a name="resetTimingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingMode"></a>

```typescript
public resetTimingMode(): void
```

##### `resetTimingSource` <a name="resetTimingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingSource"></a>

```typescript
public resetTimingSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingModeInput">timingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSourceInput">timingSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode">timingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource">timingSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timingModeInput`<sup>Optional</sup> <a name="timingModeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingModeInput"></a>

```typescript
public readonly timingModeInput: string;
```

- *Type:* string

---

##### `timingSourceInput`<sup>Optional</sup> <a name="timingSourceInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSourceInput"></a>

```typescript
public readonly timingSourceInput: string;
```

- *Type:* string

---

##### `timingMode`<sup>Required</sup> <a name="timingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode"></a>

```typescript
public readonly timingMode: string;
```

- *Type:* string

---

##### `timingSource`<sup>Required</sup> <a name="timingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource"></a>

```typescript
public readonly timingSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointDashManifestsUtcTiming;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---


### Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference <a name="Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resetEndpointErrorConditions">resetEndpointErrorConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointErrorConditions` <a name="resetEndpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resetEndpointErrorConditions"></a>

```typescript
public resetEndpointErrorConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditionsInput">endpointErrorConditionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions">endpointErrorConditions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointErrorConditionsInput`<sup>Optional</sup> <a name="endpointErrorConditionsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditionsInput"></a>

```typescript
public readonly endpointErrorConditionsInput: string[];
```

- *Type:* string[]

---

##### `endpointErrorConditions`<sup>Required</sup> <a name="endpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions"></a>

```typescript
public readonly endpointErrorConditions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointForceEndpointErrorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---


### Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetClipStartTime">resetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetDrmSettings">resetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetManifestFilter">resetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">resetTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClipStartTime` <a name="resetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```typescript
public resetClipStartTime(): void
```

##### `resetDrmSettings` <a name="resetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```typescript
public resetDrmSettings(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetManifestFilter` <a name="resetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```typescript
public resetManifestFilter(): void
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTimeDelaySeconds` <a name="resetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```typescript
public resetTimeDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">clipStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput">drmSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput">manifestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">timeDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTimeInput`<sup>Optional</sup> <a name="clipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```typescript
public readonly clipStartTimeInput: string;
```

- *Type:* string

---

##### `drmSettingsInput`<sup>Optional</sup> <a name="drmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```typescript
public readonly drmSettingsInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `manifestFilterInput`<sup>Optional</sup> <a name="manifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```typescript
public readonly manifestFilterInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timeDelaySecondsInput`<sup>Optional</sup> <a name="timeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```typescript
public readonly timeDelaySecondsInput: number;
```

- *Type:* number

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---


### Mediapackagev2OriginEndpointHlsManifestsList <a name="Mediapackagev2OriginEndpointHlsManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>[]

---


### Mediapackagev2OriginEndpointHlsManifestsOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls">putScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag">putStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetChildManifestName">resetChildManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestName">resetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">resetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetScteHls">resetScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetStartTag">resetStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUriPathType">resetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrlEncodeChildManifest">resetUrlEncodeChildManifest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration"></a>

```typescript
public putFilterConfiguration(value: Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---

##### `putScteHls` <a name="putScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls"></a>

```typescript
public putScteHls(value: Mediapackagev2OriginEndpointHlsManifestsScteHls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

---

##### `putStartTag` <a name="putStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag"></a>

```typescript
public putStartTag(value: Mediapackagev2OriginEndpointHlsManifestsStartTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

---

##### `resetChildManifestName` <a name="resetChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetChildManifestName"></a>

```typescript
public resetChildManifestName(): void
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetFilterConfiguration"></a>

```typescript
public resetFilterConfiguration(): void
```

##### `resetManifestName` <a name="resetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestName"></a>

```typescript
public resetManifestName(): void
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```

##### `resetProgramDateTimeIntervalSeconds` <a name="resetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```typescript
public resetProgramDateTimeIntervalSeconds(): void
```

##### `resetScteHls` <a name="resetScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetScteHls"></a>

```typescript
public resetScteHls(): void
```

##### `resetStartTag` <a name="resetStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetStartTag"></a>

```typescript
public resetStartTag(): void
```

##### `resetUriPathType` <a name="resetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUriPathType"></a>

```typescript
public resetUriPathType(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlEncodeChildManifest` <a name="resetUrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrlEncodeChildManifest"></a>

```typescript
public resetUrlEncodeChildManifest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestNameInput">childManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">programDateTimeIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHlsInput">scteHlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTagInput">startTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathTypeInput">uriPathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifestInput">urlEncodeChildManifestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName">childManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a>

---

##### `scteHls`<sup>Required</sup> <a name="scteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls"></a>

```typescript
public readonly scteHls: Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a>

---

##### `startTag`<sup>Required</sup> <a name="startTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag"></a>

```typescript
public readonly startTag: Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a>

---

##### `childManifestNameInput`<sup>Optional</sup> <a name="childManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestNameInput"></a>

```typescript
public readonly childManifestNameInput: string;
```

- *Type:* string

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfigurationInput"></a>

```typescript
public readonly filterConfigurationInput: IResolvable | Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestNameInput"></a>

```typescript
public readonly manifestNameInput: string;
```

- *Type:* string

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="programDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```typescript
public readonly programDateTimeIntervalSecondsInput: number;
```

- *Type:* number

---

##### `scteHlsInput`<sup>Optional</sup> <a name="scteHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHlsInput"></a>

```typescript
public readonly scteHlsInput: IResolvable | Mediapackagev2OriginEndpointHlsManifestsScteHls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

---

##### `startTagInput`<sup>Optional</sup> <a name="startTagInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTagInput"></a>

```typescript
public readonly startTagInput: IResolvable | Mediapackagev2OriginEndpointHlsManifestsStartTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

---

##### `uriPathTypeInput`<sup>Optional</sup> <a name="uriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathTypeInput"></a>

```typescript
public readonly uriPathTypeInput: string;
```

- *Type:* string

---

##### `urlEncodeChildManifestInput`<sup>Optional</sup> <a name="urlEncodeChildManifestInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifestInput"></a>

```typescript
public readonly urlEncodeChildManifestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `childManifestName`<sup>Required</sup> <a name="childManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlEncodeChildManifest`<sup>Required</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointHlsManifests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests">Mediapackagev2OriginEndpointHlsManifests</a>

---


### Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetAdMarkerHls">resetAdMarkerHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetScteInManifests">resetScteInManifests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdMarkerHls` <a name="resetAdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetAdMarkerHls"></a>

```typescript
public resetAdMarkerHls(): void
```

##### `resetScteInManifests` <a name="resetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetScteInManifests"></a>

```typescript
public resetScteInManifests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput">adMarkerHlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifestsInput">scteInManifestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerHlsInput`<sup>Optional</sup> <a name="adMarkerHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput"></a>

```typescript
public readonly adMarkerHlsInput: string;
```

- *Type:* string

---

##### `scteInManifestsInput`<sup>Optional</sup> <a name="scteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifestsInput"></a>

```typescript
public readonly scteInManifestsInput: string;
```

- *Type:* string

---

##### `adMarkerHls`<sup>Required</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointHlsManifestsScteHls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

---


### Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetPrecise">resetPrecise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetTimeOffset">resetTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrecise` <a name="resetPrecise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetPrecise"></a>

```typescript
public resetPrecise(): void
```

##### `resetTimeOffset` <a name="resetTimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetTimeOffset"></a>

```typescript
public resetTimeOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.preciseInput">preciseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffsetInput">timeOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise">precise</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset">timeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preciseInput`<sup>Optional</sup> <a name="preciseInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.preciseInput"></a>

```typescript
public readonly preciseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeOffsetInput`<sup>Optional</sup> <a name="timeOffsetInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffsetInput"></a>

```typescript
public readonly timeOffsetInput: number;
```

- *Type:* number

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise"></a>

```typescript
public readonly precise: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointHlsManifestsStartTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetClipStartTime">resetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetDrmSettings">resetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetManifestFilter">resetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">resetTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClipStartTime` <a name="resetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```typescript
public resetClipStartTime(): void
```

##### `resetDrmSettings` <a name="resetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```typescript
public resetDrmSettings(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetManifestFilter` <a name="resetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```typescript
public resetManifestFilter(): void
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTimeDelaySeconds` <a name="resetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```typescript
public resetTimeDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">clipStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput">drmSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput">manifestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">timeDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTimeInput`<sup>Optional</sup> <a name="clipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```typescript
public readonly clipStartTimeInput: string;
```

- *Type:* string

---

##### `drmSettingsInput`<sup>Optional</sup> <a name="drmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```typescript
public readonly drmSettingsInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `manifestFilterInput`<sup>Optional</sup> <a name="manifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```typescript
public readonly manifestFilterInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timeDelaySecondsInput`<sup>Optional</sup> <a name="timeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```typescript
public readonly timeDelaySecondsInput: number;
```

- *Type:* number

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsList <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>[]

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls">putScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag">putStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetChildManifestName">resetChildManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestName">resetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">resetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetScteHls">resetScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetStartTag">resetStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUriPathType">resetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrlEncodeChildManifest">resetUrlEncodeChildManifest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration"></a>

```typescript
public putFilterConfiguration(value: Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---

##### `putScteHls` <a name="putScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls"></a>

```typescript
public putScteHls(value: Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---

##### `putStartTag` <a name="putStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag"></a>

```typescript
public putStartTag(value: Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---

##### `resetChildManifestName` <a name="resetChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetChildManifestName"></a>

```typescript
public resetChildManifestName(): void
```

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetFilterConfiguration"></a>

```typescript
public resetFilterConfiguration(): void
```

##### `resetManifestName` <a name="resetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestName"></a>

```typescript
public resetManifestName(): void
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```

##### `resetProgramDateTimeIntervalSeconds` <a name="resetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```typescript
public resetProgramDateTimeIntervalSeconds(): void
```

##### `resetScteHls` <a name="resetScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetScteHls"></a>

```typescript
public resetScteHls(): void
```

##### `resetStartTag` <a name="resetStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetStartTag"></a>

```typescript
public resetStartTag(): void
```

##### `resetUriPathType` <a name="resetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUriPathType"></a>

```typescript
public resetUriPathType(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUrlEncodeChildManifest` <a name="resetUrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrlEncodeChildManifest"></a>

```typescript
public resetUrlEncodeChildManifest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls">scteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag">startTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestNameInput">childManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">programDateTimeIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHlsInput">scteHlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTagInput">startTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathTypeInput">uriPathTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifestInput">urlEncodeChildManifestInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName">childManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">programDateTimeIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType">uriPathType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest">urlEncodeChildManifest</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a>

---

##### `scteHls`<sup>Required</sup> <a name="scteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls"></a>

```typescript
public readonly scteHls: Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a>

---

##### `startTag`<sup>Required</sup> <a name="startTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag"></a>

```typescript
public readonly startTag: Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a>

---

##### `childManifestNameInput`<sup>Optional</sup> <a name="childManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestNameInput"></a>

```typescript
public readonly childManifestNameInput: string;
```

- *Type:* string

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfigurationInput"></a>

```typescript
public readonly filterConfigurationInput: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestNameInput"></a>

```typescript
public readonly manifestNameInput: string;
```

- *Type:* string

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="programDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```typescript
public readonly programDateTimeIntervalSecondsInput: number;
```

- *Type:* number

---

##### `scteHlsInput`<sup>Optional</sup> <a name="scteHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHlsInput"></a>

```typescript
public readonly scteHlsInput: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---

##### `startTagInput`<sup>Optional</sup> <a name="startTagInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTagInput"></a>

```typescript
public readonly startTagInput: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---

##### `uriPathTypeInput`<sup>Optional</sup> <a name="uriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathTypeInput"></a>

```typescript
public readonly uriPathTypeInput: string;
```

- *Type:* string

---

##### `urlEncodeChildManifestInput`<sup>Optional</sup> <a name="urlEncodeChildManifestInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifestInput"></a>

```typescript
public readonly urlEncodeChildManifestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `childManifestName`<sup>Required</sup> <a name="childManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName"></a>

```typescript
public readonly childManifestName: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `programDateTimeIntervalSeconds`<sup>Required</sup> <a name="programDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```typescript
public readonly programDateTimeIntervalSeconds: number;
```

- *Type:* number

---

##### `uriPathType`<sup>Required</sup> <a name="uriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType"></a>

```typescript
public readonly uriPathType: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `urlEncodeChildManifest`<sup>Required</sup> <a name="urlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```typescript
public readonly urlEncodeChildManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests">Mediapackagev2OriginEndpointLowLatencyHlsManifests</a>

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetAdMarkerHls">resetAdMarkerHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetScteInManifests">resetScteInManifests</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdMarkerHls` <a name="resetAdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetAdMarkerHls"></a>

```typescript
public resetAdMarkerHls(): void
```

##### `resetScteInManifests` <a name="resetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetScteInManifests"></a>

```typescript
public resetScteInManifests(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput">adMarkerHlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifestsInput">scteInManifestsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls">adMarkerHls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests">scteInManifests</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adMarkerHlsInput`<sup>Optional</sup> <a name="adMarkerHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput"></a>

```typescript
public readonly adMarkerHlsInput: string;
```

- *Type:* string

---

##### `scteInManifestsInput`<sup>Optional</sup> <a name="scteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifestsInput"></a>

```typescript
public readonly scteInManifestsInput: string;
```

- *Type:* string

---

##### `adMarkerHls`<sup>Required</sup> <a name="adMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```typescript
public readonly adMarkerHls: string;
```

- *Type:* string

---

##### `scteInManifests`<sup>Required</sup> <a name="scteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```typescript
public readonly scteInManifests: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetPrecise">resetPrecise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetTimeOffset">resetTimeOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrecise` <a name="resetPrecise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetPrecise"></a>

```typescript
public resetPrecise(): void
```

##### `resetTimeOffset` <a name="resetTimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetTimeOffset"></a>

```typescript
public resetTimeOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.preciseInput">preciseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffsetInput">timeOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise">precise</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset">timeOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preciseInput`<sup>Optional</sup> <a name="preciseInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.preciseInput"></a>

```typescript
public readonly preciseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeOffsetInput`<sup>Optional</sup> <a name="timeOffsetInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffsetInput"></a>

```typescript
public readonly timeOffsetInput: number;
```

- *Type:* number

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise"></a>

```typescript
public readonly precise: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `timeOffset`<sup>Required</sup> <a name="timeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```typescript
public readonly timeOffset: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---


### Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetClipStartTime">resetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetDrmSettings">resetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetManifestFilter">resetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetStart">resetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">resetTimeDelaySeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClipStartTime` <a name="resetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```typescript
public resetClipStartTime(): void
```

##### `resetDrmSettings` <a name="resetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```typescript
public resetDrmSettings(): void
```

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetManifestFilter` <a name="resetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```typescript
public resetManifestFilter(): void
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```

##### `resetTimeDelaySeconds` <a name="resetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```typescript
public resetTimeDelaySeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">clipStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettingsInput">drmSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilterInput">manifestFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">timeDelaySecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime">clipStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings">drmSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter">manifestFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">timeDelaySeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clipStartTimeInput`<sup>Optional</sup> <a name="clipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```typescript
public readonly clipStartTimeInput: string;
```

- *Type:* string

---

##### `drmSettingsInput`<sup>Optional</sup> <a name="drmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```typescript
public readonly drmSettingsInput: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `manifestFilterInput`<sup>Optional</sup> <a name="manifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```typescript
public readonly manifestFilterInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `timeDelaySecondsInput`<sup>Optional</sup> <a name="timeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```typescript
public readonly timeDelaySecondsInput: number;
```

- *Type:* number

---

##### `clipStartTime`<sup>Required</sup> <a name="clipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```typescript
public readonly clipStartTime: string;
```

- *Type:* string

---

##### `drmSettings`<sup>Required</sup> <a name="drmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```typescript
public readonly drmSettings: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `manifestFilter`<sup>Required</sup> <a name="manifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```typescript
public readonly manifestFilter: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `timeDelaySeconds`<sup>Required</sup> <a name="timeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```typescript
public readonly timeDelaySeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointMssManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---


### Mediapackagev2OriginEndpointMssManifestsList <a name="Mediapackagev2OriginEndpointMssManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointMssManifests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>[]

---


### Mediapackagev2OriginEndpointMssManifestsOutputReference <a name="Mediapackagev2OriginEndpointMssManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration">putFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetFilterConfiguration">resetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestLayout">resetManifestLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestName">resetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestWindowSeconds">resetManifestWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilterConfiguration` <a name="putFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration"></a>

```typescript
public putFilterConfiguration(value: Mediapackagev2OriginEndpointMssManifestsFilterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---

##### `resetFilterConfiguration` <a name="resetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetFilterConfiguration"></a>

```typescript
public resetFilterConfiguration(): void
```

##### `resetManifestLayout` <a name="resetManifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestLayout"></a>

```typescript
public resetManifestLayout(): void
```

##### `resetManifestName` <a name="resetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestName"></a>

```typescript
public resetManifestName(): void
```

##### `resetManifestWindowSeconds` <a name="resetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestWindowSeconds"></a>

```typescript
public resetManifestWindowSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration">filterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfigurationInput">filterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayoutInput">manifestLayoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestNameInput">manifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSecondsInput">manifestWindowSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout">manifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName">manifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds">manifestWindowSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterConfiguration`<sup>Required</sup> <a name="filterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration"></a>

```typescript
public readonly filterConfiguration: Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a>

---

##### `filterConfigurationInput`<sup>Optional</sup> <a name="filterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfigurationInput"></a>

```typescript
public readonly filterConfigurationInput: IResolvable | Mediapackagev2OriginEndpointMssManifestsFilterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---

##### `manifestLayoutInput`<sup>Optional</sup> <a name="manifestLayoutInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayoutInput"></a>

```typescript
public readonly manifestLayoutInput: string;
```

- *Type:* string

---

##### `manifestNameInput`<sup>Optional</sup> <a name="manifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestNameInput"></a>

```typescript
public readonly manifestNameInput: string;
```

- *Type:* string

---

##### `manifestWindowSecondsInput`<sup>Optional</sup> <a name="manifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```typescript
public readonly manifestWindowSecondsInput: number;
```

- *Type:* number

---

##### `manifestLayout`<sup>Required</sup> <a name="manifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout"></a>

```typescript
public readonly manifestLayout: string;
```

- *Type:* string

---

##### `manifestName`<sup>Required</sup> <a name="manifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName"></a>

```typescript
public readonly manifestName: string;
```

- *Type:* string

---

##### `manifestWindowSeconds`<sup>Required</sup> <a name="manifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds"></a>

```typescript
public readonly manifestWindowSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointMssManifests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests">Mediapackagev2OriginEndpointMssManifests</a>

---


### Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetCmafEncryptionMethod">resetCmafEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetIsmEncryptionMethod">resetIsmEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetTsEncryptionMethod">resetTsEncryptionMethod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmafEncryptionMethod` <a name="resetCmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetCmafEncryptionMethod"></a>

```typescript
public resetCmafEncryptionMethod(): void
```

##### `resetIsmEncryptionMethod` <a name="resetIsmEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetIsmEncryptionMethod"></a>

```typescript
public resetIsmEncryptionMethod(): void
```

##### `resetTsEncryptionMethod` <a name="resetTsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetTsEncryptionMethod"></a>

```typescript
public resetTsEncryptionMethod(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethodInput">cmafEncryptionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethodInput">ismEncryptionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethodInput">tsEncryptionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod">cmafEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod">ismEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod">tsEncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmafEncryptionMethodInput`<sup>Optional</sup> <a name="cmafEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethodInput"></a>

```typescript
public readonly cmafEncryptionMethodInput: string;
```

- *Type:* string

---

##### `ismEncryptionMethodInput`<sup>Optional</sup> <a name="ismEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethodInput"></a>

```typescript
public readonly ismEncryptionMethodInput: string;
```

- *Type:* string

---

##### `tsEncryptionMethodInput`<sup>Optional</sup> <a name="tsEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethodInput"></a>

```typescript
public readonly tsEncryptionMethodInput: string;
```

- *Type:* string

---

##### `cmafEncryptionMethod`<sup>Required</sup> <a name="cmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod"></a>

```typescript
public readonly cmafEncryptionMethod: string;
```

- *Type:* string

---

##### `ismEncryptionMethod`<sup>Required</sup> <a name="ismEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod"></a>

```typescript
public readonly ismEncryptionMethod: string;
```

- *Type:* string

---

##### `tsEncryptionMethod`<sup>Required</sup> <a name="tsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod"></a>

```typescript
public readonly tsEncryptionMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---


### Mediapackagev2OriginEndpointSegmentEncryptionOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod">putEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider">putSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetCmafExcludeSegmentDrmMetadata">resetCmafExcludeSegmentDrmMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetConstantInitializationVector">resetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetEncryptionMethod">resetEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetKeyRotationIntervalSeconds">resetKeyRotationIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetSpekeKeyProvider">resetSpekeKeyProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionMethod` <a name="putEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod"></a>

```typescript
public putEncryptionMethod(value: Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---

##### `putSpekeKeyProvider` <a name="putSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider"></a>

```typescript
public putSpekeKeyProvider(value: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---

##### `resetCmafExcludeSegmentDrmMetadata` <a name="resetCmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetCmafExcludeSegmentDrmMetadata"></a>

```typescript
public resetCmafExcludeSegmentDrmMetadata(): void
```

##### `resetConstantInitializationVector` <a name="resetConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetConstantInitializationVector"></a>

```typescript
public resetConstantInitializationVector(): void
```

##### `resetEncryptionMethod` <a name="resetEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetEncryptionMethod"></a>

```typescript
public resetEncryptionMethod(): void
```

##### `resetKeyRotationIntervalSeconds` <a name="resetKeyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetKeyRotationIntervalSeconds"></a>

```typescript
public resetKeyRotationIntervalSeconds(): void
```

##### `resetSpekeKeyProvider` <a name="resetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetSpekeKeyProvider"></a>

```typescript
public resetSpekeKeyProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod">encryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider">spekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadataInput">cmafExcludeSegmentDrmMetadataInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVectorInput">constantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethodInput">encryptionMethodInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSecondsInput">keyRotationIntervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProviderInput">spekeKeyProviderInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata">cmafExcludeSegmentDrmMetadata</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds">keyRotationIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionMethod`<sup>Required</sup> <a name="encryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod"></a>

```typescript
public readonly encryptionMethod: Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a>

---

##### `spekeKeyProvider`<sup>Required</sup> <a name="spekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider"></a>

```typescript
public readonly spekeKeyProvider: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a>

---

##### `cmafExcludeSegmentDrmMetadataInput`<sup>Optional</sup> <a name="cmafExcludeSegmentDrmMetadataInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadataInput"></a>

```typescript
public readonly cmafExcludeSegmentDrmMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `constantInitializationVectorInput`<sup>Optional</sup> <a name="constantInitializationVectorInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```typescript
public readonly constantInitializationVectorInput: string;
```

- *Type:* string

---

##### `encryptionMethodInput`<sup>Optional</sup> <a name="encryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethodInput"></a>

```typescript
public readonly encryptionMethodInput: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---

##### `keyRotationIntervalSecondsInput`<sup>Optional</sup> <a name="keyRotationIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSecondsInput"></a>

```typescript
public readonly keyRotationIntervalSecondsInput: number;
```

- *Type:* number

---

##### `spekeKeyProviderInput`<sup>Optional</sup> <a name="spekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```typescript
public readonly spekeKeyProviderInput: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---

##### `cmafExcludeSegmentDrmMetadata`<sup>Required</sup> <a name="cmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata"></a>

```typescript
public readonly cmafExcludeSegmentDrmMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `keyRotationIntervalSeconds`<sup>Required</sup> <a name="keyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds"></a>

```typescript
public readonly keyRotationIntervalSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegmentEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

---


### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">resetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">resetPresetSpeke20Video</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPresetSpeke20Audio` <a name="resetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```typescript
public resetPresetSpeke20Audio(): void
```

##### `resetPresetSpeke20Video` <a name="resetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```typescript
public resetPresetSpeke20Video(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">presetSpeke20AudioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">presetSpeke20VideoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">presetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">presetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `presetSpeke20AudioInput`<sup>Optional</sup> <a name="presetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```typescript
public readonly presetSpeke20AudioInput: string;
```

- *Type:* string

---

##### `presetSpeke20VideoInput`<sup>Optional</sup> <a name="presetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```typescript
public readonly presetSpeke20VideoInput: string;
```

- *Type:* string

---

##### `presetSpeke20Audio`<sup>Required</sup> <a name="presetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```typescript
public readonly presetSpeke20Audio: string;
```

- *Type:* string

---

##### `presetSpeke20Video`<sup>Required</sup> <a name="presetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```typescript
public readonly presetSpeke20Video: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">putEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetDrmSystems">resetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">resetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionContractConfiguration` <a name="putEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```typescript
public putEncryptionContractConfiguration(value: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDrmSystems` <a name="resetDrmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetDrmSystems"></a>

```typescript
public resetDrmSystems(): void
```

##### `resetEncryptionContractConfiguration` <a name="resetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```typescript
public resetEncryptionContractConfiguration(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">encryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystemsInput">drmSystemsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">encryptionContractConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems">drmSystems</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionContractConfiguration`<sup>Required</sup> <a name="encryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```typescript
public readonly encryptionContractConfiguration: Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `drmSystemsInput`<sup>Optional</sup> <a name="drmSystemsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystemsInput"></a>

```typescript
public readonly drmSystemsInput: string[];
```

- *Type:* string[]

---

##### `encryptionContractConfigurationInput`<sup>Optional</sup> <a name="encryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```typescript
public readonly encryptionContractConfigurationInput: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `drmSystems`<sup>Required</sup> <a name="drmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems"></a>

```typescript
public readonly drmSystems: string[];
```

- *Type:* string[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---


### Mediapackagev2OriginEndpointSegmentOutputReference <a name="Mediapackagev2OriginEndpointSegmentOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte">putScte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetIncludeIframeOnlyStreams">resetIncludeIframeOnlyStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetOutputTimestampMode">resetOutputTimestampMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetScte">resetScte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentDurationSeconds">resetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentName">resetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsIncludeDvbSubtitles">resetTsIncludeDvbSubtitles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsUseAudioRenditionGroup">resetTsUseAudioRenditionGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption"></a>

```typescript
public putEncryption(value: Mediapackagev2OriginEndpointSegmentEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

---

##### `putScte` <a name="putScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte"></a>

```typescript
public putScte(value: Mediapackagev2OriginEndpointSegmentScte): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

---

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetIncludeIframeOnlyStreams` <a name="resetIncludeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetIncludeIframeOnlyStreams"></a>

```typescript
public resetIncludeIframeOnlyStreams(): void
```

##### `resetOutputTimestampMode` <a name="resetOutputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetOutputTimestampMode"></a>

```typescript
public resetOutputTimestampMode(): void
```

##### `resetScte` <a name="resetScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetScte"></a>

```typescript
public resetScte(): void
```

##### `resetSegmentDurationSeconds` <a name="resetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentDurationSeconds"></a>

```typescript
public resetSegmentDurationSeconds(): void
```

##### `resetSegmentName` <a name="resetSegmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentName"></a>

```typescript
public resetSegmentName(): void
```

##### `resetTsIncludeDvbSubtitles` <a name="resetTsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsIncludeDvbSubtitles"></a>

```typescript
public resetTsIncludeDvbSubtitles(): void
```

##### `resetTsUseAudioRenditionGroup` <a name="resetTsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsUseAudioRenditionGroup"></a>

```typescript
public resetTsUseAudioRenditionGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scte">scte</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference">Mediapackagev2OriginEndpointSegmentScteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreamsInput">includeIframeOnlyStreamsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampModeInput">outputTimestampModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scteInput">scteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSecondsInput">segmentDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentNameInput">segmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitlesInput">tsIncludeDvbSubtitlesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroupInput">tsUseAudioRenditionGroupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams">includeIframeOnlyStreams</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode">outputTimestampMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds">segmentDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles">tsIncludeDvbSubtitles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup">tsUseAudioRenditionGroup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryption"></a>

```typescript
public readonly encryption: Mediapackagev2OriginEndpointSegmentEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionOutputReference</a>

---

##### `scte`<sup>Required</sup> <a name="scte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scte"></a>

```typescript
public readonly scte: Mediapackagev2OriginEndpointSegmentScteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference">Mediapackagev2OriginEndpointSegmentScteOutputReference</a>

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: IResolvable | Mediapackagev2OriginEndpointSegmentEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

---

##### `includeIframeOnlyStreamsInput`<sup>Optional</sup> <a name="includeIframeOnlyStreamsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreamsInput"></a>

```typescript
public readonly includeIframeOnlyStreamsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputTimestampModeInput`<sup>Optional</sup> <a name="outputTimestampModeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampModeInput"></a>

```typescript
public readonly outputTimestampModeInput: string;
```

- *Type:* string

---

##### `scteInput`<sup>Optional</sup> <a name="scteInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scteInput"></a>

```typescript
public readonly scteInput: IResolvable | Mediapackagev2OriginEndpointSegmentScte;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

---

##### `segmentDurationSecondsInput`<sup>Optional</sup> <a name="segmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSecondsInput"></a>

```typescript
public readonly segmentDurationSecondsInput: number;
```

- *Type:* number

---

##### `segmentNameInput`<sup>Optional</sup> <a name="segmentNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentNameInput"></a>

```typescript
public readonly segmentNameInput: string;
```

- *Type:* string

---

##### `tsIncludeDvbSubtitlesInput`<sup>Optional</sup> <a name="tsIncludeDvbSubtitlesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitlesInput"></a>

```typescript
public readonly tsIncludeDvbSubtitlesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tsUseAudioRenditionGroupInput`<sup>Optional</sup> <a name="tsUseAudioRenditionGroupInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroupInput"></a>

```typescript
public readonly tsUseAudioRenditionGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeIframeOnlyStreams`<sup>Required</sup> <a name="includeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams"></a>

```typescript
public readonly includeIframeOnlyStreams: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `outputTimestampMode`<sup>Required</sup> <a name="outputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode"></a>

```typescript
public readonly outputTimestampMode: string;
```

- *Type:* string

---

##### `segmentDurationSeconds`<sup>Required</sup> <a name="segmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds"></a>

```typescript
public readonly segmentDurationSeconds: number;
```

- *Type:* number

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `tsIncludeDvbSubtitles`<sup>Required</sup> <a name="tsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles"></a>

```typescript
public readonly tsIncludeDvbSubtitles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tsUseAudioRenditionGroup`<sup>Required</sup> <a name="tsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup"></a>

```typescript
public readonly tsUseAudioRenditionGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

---


### Mediapackagev2OriginEndpointSegmentScteOutputReference <a name="Mediapackagev2OriginEndpointSegmentScteOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetCustomAdTypes">resetCustomAdTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteFilter">resetScteFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteInSegments">resetScteInSegments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomAdTypes` <a name="resetCustomAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetCustomAdTypes"></a>

```typescript
public resetCustomAdTypes(): void
```

##### `resetScteFilter` <a name="resetScteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteFilter"></a>

```typescript
public resetScteFilter(): void
```

##### `resetScteInSegments` <a name="resetScteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteInSegments"></a>

```typescript
public resetScteInSegments(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypesInput">customAdTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilterInput">scteFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegmentsInput">scteInSegmentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes">customAdTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter">scteFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments">scteInSegments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customAdTypesInput`<sup>Optional</sup> <a name="customAdTypesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypesInput"></a>

```typescript
public readonly customAdTypesInput: string[];
```

- *Type:* string[]

---

##### `scteFilterInput`<sup>Optional</sup> <a name="scteFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilterInput"></a>

```typescript
public readonly scteFilterInput: string[];
```

- *Type:* string[]

---

##### `scteInSegmentsInput`<sup>Optional</sup> <a name="scteInSegmentsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegmentsInput"></a>

```typescript
public readonly scteInSegmentsInput: string;
```

- *Type:* string

---

##### `customAdTypes`<sup>Required</sup> <a name="customAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes"></a>

```typescript
public readonly customAdTypes: string[];
```

- *Type:* string[]

---

##### `scteFilter`<sup>Required</sup> <a name="scteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter"></a>

```typescript
public readonly scteFilter: string[];
```

- *Type:* string[]

---

##### `scteInSegments`<sup>Required</sup> <a name="scteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments"></a>

```typescript
public readonly scteInSegments: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointSegmentScte;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

---


### Mediapackagev2OriginEndpointTagsList <a name="Mediapackagev2OriginEndpointTagsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get"></a>

```typescript
public get(index: number): Mediapackagev2OriginEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>[]

---


### Mediapackagev2OriginEndpointTagsOutputReference <a name="Mediapackagev2OriginEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer"></a>

```typescript
import { mediapackagev2OriginEndpoint } from '@cdktn/provider-awscc'

new mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Mediapackagev2OriginEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags">Mediapackagev2OriginEndpointTags</a>

---



