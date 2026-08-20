# `rtbfabricOutboundExternalLink` Submodule <a name="`rtbfabricOutboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricOutboundExternalLink <a name="RtbfabricOutboundExternalLink" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink(scope: Construct, id: string, config: RtbfabricOutboundExternalLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig">RtbfabricOutboundExternalLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig">RtbfabricOutboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes">putLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings">putLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes">resetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinkAttributes` <a name="putLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes"></a>

```typescript
public putLinkAttributes(value: RtbfabricOutboundExternalLinkLinkAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---

##### `putLinkLogSettings` <a name="putLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings"></a>

```typescript
public putLinkLogSettings(value: RtbfabricOutboundExternalLinkLinkLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags"></a>

```typescript
public putTags(value: IResolvable | RtbfabricOutboundExternalLinkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]

---

##### `resetLinkAttributes` <a name="resetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes"></a>

```typescript
public resetLinkAttributes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricOutboundExternalLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricOutboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricOutboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus">linkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput">linkAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput">linkLogSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput">publicEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint">publicEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkAttributes`<sup>Required</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: RtbfabricOutboundExternalLinkLinkAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a>

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `linkStatus`<sup>Required</sup> <a name="linkStatus" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus"></a>

```typescript
public readonly linkStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags"></a>

```typescript
public readonly tags: RtbfabricOutboundExternalLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `linkAttributesInput`<sup>Optional</sup> <a name="linkAttributesInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput"></a>

```typescript
public readonly linkAttributesInput: IResolvable | RtbfabricOutboundExternalLinkLinkAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---

##### `linkLogSettingsInput`<sup>Optional</sup> <a name="linkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput"></a>

```typescript
public readonly linkLogSettingsInput: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput"></a>

```typescript
public readonly publicEndpointInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RtbfabricOutboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricOutboundExternalLinkConfig <a name="RtbfabricOutboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkConfig: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint">publicEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]</code> | Tags to assign to the Link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}.

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: RtbfabricOutboundExternalLinkLinkLogSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}.

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}.

---

##### `linkAttributes`<sup>Optional</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: RtbfabricOutboundExternalLinkLinkAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RtbfabricOutboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#tags RtbfabricOutboundExternalLink#tags}

---

### RtbfabricOutboundExternalLinkLinkAttributes <a name="RtbfabricOutboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkLinkAttributes: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking">responderErrorMasking</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}. |

---

##### `customerProvidedId`<sup>Optional</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}.

---

##### `responderErrorMasking`<sup>Optional</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}.

---

### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">httpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}.

---

##### `httpCode`<sup>Optional</sup> <a name="httpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}.

---

##### `loggingTypes`<sup>Optional</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}.

---

##### `responseLoggingPercentage`<sup>Optional</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}.

---

### RtbfabricOutboundExternalLinkLinkLogSettings <a name="RtbfabricOutboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkLinkLogSettings: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}. |

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}. |

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">errorLog</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">filterLog</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}. |

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}.

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}.

---

### RtbfabricOutboundExternalLinkTags <a name="RtbfabricOutboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricOutboundExternalLinkTags: rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#key RtbfabricOutboundExternalLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_outbound_external_link#value RtbfabricOutboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricOutboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">putResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">resetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">resetResponderErrorMasking</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponderErrorMasking` <a name="putResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```typescript
public putResponderErrorMasking(value: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `resetCustomerProvidedId` <a name="resetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```typescript
public resetCustomerProvidedId(): void
```

##### `resetResponderErrorMasking` <a name="resetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```typescript
public resetResponderErrorMasking(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">responderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">customerProvidedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">responderErrorMaskingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responderErrorMasking`<sup>Required</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `customerProvidedIdInput`<sup>Optional</sup> <a name="customerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```typescript
public readonly customerProvidedIdInput: string;
```

- *Type:* string

---

##### `responderErrorMaskingInput`<sup>Optional</sup> <a name="responderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```typescript
public readonly responderErrorMaskingInput: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `customerProvidedId`<sup>Required</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```typescript
public get(index: number): RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">resetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">resetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">resetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHttpCode` <a name="resetHttpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```typescript
public resetHttpCode(): void
```

##### `resetLoggingTypes` <a name="resetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```typescript
public resetLoggingTypes(): void
```

##### `resetResponseLoggingPercentage` <a name="resetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```typescript
public resetResponseLoggingPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">httpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">loggingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">responseLoggingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">httpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `httpCodeInput`<sup>Optional</sup> <a name="httpCodeInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```typescript
public readonly httpCodeInput: string;
```

- *Type:* string

---

##### `loggingTypesInput`<sup>Optional</sup> <a name="loggingTypesInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```typescript
public readonly loggingTypesInput: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentageInput`<sup>Optional</sup> <a name="responseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```typescript
public readonly responseLoggingPercentageInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

---

##### `loggingTypes`<sup>Required</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentage`<sup>Required</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">errorLogInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">filterLogInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">errorLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filterLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorLogInput`<sup>Optional</sup> <a name="errorLogInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```typescript
public readonly errorLogInput: number;
```

- *Type:* number

---

##### `filterLogInput`<sup>Optional</sup> <a name="filterLogInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```typescript
public readonly filterLogInput: number;
```

- *Type:* number

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">putLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinkApplicationLogSampling` <a name="putLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```typescript
public putLinkApplicationLogSampling(value: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">linkApplicationLogSamplingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `linkApplicationLogSamplingInput`<sup>Optional</sup> <a name="linkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```typescript
public readonly linkApplicationLogSamplingInput: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```typescript
public putApplicationLogs(value: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```typescript
public readonly applicationLogsInput: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkLinkLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---


### RtbfabricOutboundExternalLinkTagsList <a name="RtbfabricOutboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get"></a>

```typescript
public get(index: number): RtbfabricOutboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>[]

---


### RtbfabricOutboundExternalLinkTagsOutputReference <a name="RtbfabricOutboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer"></a>

```typescript
import { rtbfabricOutboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricOutboundExternalLinkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags">RtbfabricOutboundExternalLinkTags</a>

---



