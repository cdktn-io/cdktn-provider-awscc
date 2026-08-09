# `rtbfabricInboundExternalLink` Submodule <a name="`rtbfabricInboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricInboundExternalLink <a name="RtbfabricInboundExternalLink" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLink(scope: Construct, id: string, config: RtbfabricInboundExternalLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes">putLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings">putLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes">resetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLinkAttributes` <a name="putLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes"></a>

```typescript
public putLinkAttributes(value: RtbfabricInboundExternalLinkLinkAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---

##### `putLinkLogSettings` <a name="putLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings"></a>

```typescript
public putLinkLogSettings(value: RtbfabricInboundExternalLinkLinkLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags"></a>

```typescript
public putTags(value: IResolvable | RtbfabricInboundExternalLinkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---

##### `resetLinkAttributes` <a name="resetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes"></a>

```typescript
public resetLinkAttributes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricInboundExternalLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricInboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricInboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus">linkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput">linkAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput">linkLogSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `linkAttributes`<sup>Required</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: RtbfabricInboundExternalLinkLinkAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a>

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: RtbfabricInboundExternalLinkLinkLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `linkStatus`<sup>Required</sup> <a name="linkStatus" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus"></a>

```typescript
public readonly linkStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags"></a>

```typescript
public readonly tags: RtbfabricInboundExternalLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `linkAttributesInput`<sup>Optional</sup> <a name="linkAttributesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput"></a>

```typescript
public readonly linkAttributesInput: IResolvable | RtbfabricInboundExternalLinkLinkAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---

##### `linkLogSettingsInput`<sup>Optional</sup> <a name="linkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput"></a>

```typescript
public readonly linkLogSettingsInput: IResolvable | RtbfabricInboundExternalLinkLinkLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RtbfabricInboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricInboundExternalLinkConfig <a name="RtbfabricInboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkConfig: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings">linkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes">linkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | Tags to assign to the Link. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}.

---

##### `linkLogSettings`<sup>Required</sup> <a name="linkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings"></a>

```typescript
public readonly linkLogSettings: RtbfabricInboundExternalLinkLinkLogSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}.

---

##### `linkAttributes`<sup>Optional</sup> <a name="linkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes"></a>

```typescript
public readonly linkAttributes: RtbfabricInboundExternalLinkLinkAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RtbfabricInboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#tags RtbfabricInboundExternalLink#tags}

---

### RtbfabricInboundExternalLinkLinkAttributes <a name="RtbfabricInboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkLinkAttributes: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking">responderErrorMasking</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}. |

---

##### `customerProvidedId`<sup>Optional</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}.

---

##### `responderErrorMasking`<sup>Optional</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: IResolvable | RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}.

---

### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">httpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}.

---

##### `httpCode`<sup>Optional</sup> <a name="httpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}.

---

##### `loggingTypes`<sup>Optional</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}.

---

##### `responseLoggingPercentage`<sup>Optional</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}.

---

### RtbfabricInboundExternalLinkLinkLogSettings <a name="RtbfabricInboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkLinkLogSettings: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}. |

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}. |

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">errorLog</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">filterLog</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}. |

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}.

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}.

---

### RtbfabricInboundExternalLinkTags <a name="RtbfabricInboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

const rtbfabricInboundExternalLinkTags: rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#key RtbfabricInboundExternalLink#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_inbound_external_link#value RtbfabricInboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricInboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">putResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">resetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">resetResponderErrorMasking</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponderErrorMasking` <a name="putResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```typescript
public putResponderErrorMasking(value: IResolvable | RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `resetCustomerProvidedId` <a name="resetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```typescript
public resetCustomerProvidedId(): void
```

##### `resetResponderErrorMasking` <a name="resetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```typescript
public resetResponderErrorMasking(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">responderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">customerProvidedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">responderErrorMaskingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">customerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responderErrorMasking`<sup>Required</sup> <a name="responderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```typescript
public readonly responderErrorMasking: RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `customerProvidedIdInput`<sup>Optional</sup> <a name="customerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```typescript
public readonly customerProvidedIdInput: string;
```

- *Type:* string

---

##### `responderErrorMaskingInput`<sup>Optional</sup> <a name="responderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```typescript
public readonly responderErrorMaskingInput: IResolvable | RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `customerProvidedId`<sup>Required</sup> <a name="customerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```typescript
public readonly customerProvidedId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```typescript
public get(index: number): RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">resetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">resetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">resetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetHttpCode` <a name="resetHttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```typescript
public resetHttpCode(): void
```

##### `resetLoggingTypes` <a name="resetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```typescript
public resetLoggingTypes(): void
```

##### `resetResponseLoggingPercentage` <a name="resetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```typescript
public resetResponseLoggingPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">httpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">loggingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">responseLoggingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">httpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">loggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">responseLoggingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `httpCodeInput`<sup>Optional</sup> <a name="httpCodeInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```typescript
public readonly httpCodeInput: string;
```

- *Type:* string

---

##### `loggingTypesInput`<sup>Optional</sup> <a name="loggingTypesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```typescript
public readonly loggingTypesInput: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentageInput`<sup>Optional</sup> <a name="responseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```typescript
public readonly responseLoggingPercentageInput: number;
```

- *Type:* number

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `httpCode`<sup>Required</sup> <a name="httpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```typescript
public readonly httpCode: string;
```

- *Type:* string

---

##### `loggingTypes`<sup>Required</sup> <a name="loggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```typescript
public readonly loggingTypes: string[];
```

- *Type:* string[]

---

##### `responseLoggingPercentage`<sup>Required</sup> <a name="responseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```typescript
public readonly responseLoggingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">errorLogInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">filterLogInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">errorLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filterLog</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorLogInput`<sup>Optional</sup> <a name="errorLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```typescript
public readonly errorLogInput: number;
```

- *Type:* number

---

##### `filterLogInput`<sup>Optional</sup> <a name="filterLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```typescript
public readonly filterLogInput: number;
```

- *Type:* number

---

##### `errorLog`<sup>Required</sup> <a name="errorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```typescript
public readonly errorLog: number;
```

- *Type:* number

---

##### `filterLog`<sup>Required</sup> <a name="filterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```typescript
public readonly filterLog: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">putLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLinkApplicationLogSampling` <a name="putLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```typescript
public putLinkApplicationLogSampling(value: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">linkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">linkApplicationLogSamplingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `linkApplicationLogSampling`<sup>Required</sup> <a name="linkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```typescript
public readonly linkApplicationLogSampling: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `linkApplicationLogSamplingInput`<sup>Optional</sup> <a name="linkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```typescript
public readonly linkApplicationLogSamplingInput: IResolvable | RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">putApplicationLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationLogs` <a name="putApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```typescript
public putApplicationLogs(value: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">applicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">applicationLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationLogs`<sup>Required</sup> <a name="applicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```typescript
public readonly applicationLogs: RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `applicationLogsInput`<sup>Optional</sup> <a name="applicationLogsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```typescript
public readonly applicationLogsInput: IResolvable | RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkLinkLogSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---


### RtbfabricInboundExternalLinkTagsList <a name="RtbfabricInboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get"></a>

```typescript
public get(index: number): RtbfabricInboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---


### RtbfabricInboundExternalLinkTagsOutputReference <a name="RtbfabricInboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer"></a>

```typescript
import { rtbfabricInboundExternalLink } from '@cdktn/provider-awscc'

new rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricInboundExternalLinkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>

---



