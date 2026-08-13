# `connectcampaignsCampaign` Submodule <a name="`connectcampaignsCampaign` Submodule" id="@cdktn/provider-awscc.connectcampaignsCampaign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectcampaignsCampaign <a name="ConnectcampaignsCampaign" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign awscc_connectcampaigns_campaign}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaign(scope: Construct, id: string, config: ConnectcampaignsCampaignConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig">ConnectcampaignsCampaignConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig">putDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig">putOutboundCallConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDialerConfig` <a name="putDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig"></a>

```typescript
public putDialerConfig(value: ConnectcampaignsCampaignDialerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---

##### `putOutboundCallConfig` <a name="putOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig"></a>

```typescript
public putOutboundCallConfig(value: ConnectcampaignsCampaignOutboundCallConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putOutboundCallConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectcampaignsCampaignTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectcampaignsCampaign resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectcampaignsCampaign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectcampaignsCampaign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectcampaignsCampaign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig">dialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig">outboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput">connectInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput">dialerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput">outboundCallConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn">connectInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dialerConfig`<sup>Required</sup> <a name="dialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfig"></a>

```typescript
public readonly dialerConfig: ConnectcampaignsCampaignDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outboundCallConfig`<sup>Required</sup> <a name="outboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfig"></a>

```typescript
public readonly outboundCallConfig: ConnectcampaignsCampaignOutboundCallConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tags"></a>

```typescript
public readonly tags: ConnectcampaignsCampaignTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList">ConnectcampaignsCampaignTagsList</a>

---

##### `connectInstanceArnInput`<sup>Optional</sup> <a name="connectInstanceArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArnInput"></a>

```typescript
public readonly connectInstanceArnInput: string;
```

- *Type:* string

---

##### `dialerConfigInput`<sup>Optional</sup> <a name="dialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.dialerConfigInput"></a>

```typescript
public readonly dialerConfigInput: IResolvable | ConnectcampaignsCampaignDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outboundCallConfigInput`<sup>Optional</sup> <a name="outboundCallConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.outboundCallConfigInput"></a>

```typescript
public readonly outboundCallConfigInput: IResolvable | ConnectcampaignsCampaignOutboundCallConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectcampaignsCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---

##### `connectInstanceArn`<sup>Required</sup> <a name="connectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.connectInstanceArn"></a>

```typescript
public readonly connectInstanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaign.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectcampaignsCampaignConfig <a name="ConnectcampaignsCampaignConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignConfig: connectcampaignsCampaign.ConnectcampaignsCampaignConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn">connectInstanceArn</a></code> | <code>string</code> | Amazon Connect Instance Arn. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig">dialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | The possible types of dialer config parameters. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name">name</a></code> | <code>string</code> | Amazon Connect Campaign Name. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig">outboundCallConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | The configuration used for outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectInstanceArn`<sup>Required</sup> <a name="connectInstanceArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.connectInstanceArn"></a>

```typescript
public readonly connectInstanceArn: string;
```

- *Type:* string

Amazon Connect Instance Arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_instance_arn ConnectcampaignsCampaign#connect_instance_arn}

---

##### `dialerConfig`<sup>Required</sup> <a name="dialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.dialerConfig"></a>

```typescript
public readonly dialerConfig: ConnectcampaignsCampaignDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

The possible types of dialer config parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialer_config ConnectcampaignsCampaign#dialer_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Amazon Connect Campaign Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#name ConnectcampaignsCampaign#name}

---

##### `outboundCallConfig`<sup>Required</sup> <a name="outboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.outboundCallConfig"></a>

```typescript
public readonly outboundCallConfig: ConnectcampaignsCampaignOutboundCallConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

The configuration used for outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#outbound_call_config ConnectcampaignsCampaign#outbound_call_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectcampaignsCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#tags ConnectcampaignsCampaign#tags}

---

### ConnectcampaignsCampaignDialerConfig <a name="ConnectcampaignsCampaignDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignDialerConfig: connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig">agentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | Agentless Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig">predictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | Predictive Dialer config. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig">progressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | Progressive Dialer config. |

---

##### `agentlessDialerConfig`<sup>Optional</sup> <a name="agentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.agentlessDialerConfig"></a>

```typescript
public readonly agentlessDialerConfig: ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

Agentless Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#agentless_dialer_config ConnectcampaignsCampaign#agentless_dialer_config}

---

##### `predictiveDialerConfig`<sup>Optional</sup> <a name="predictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.predictiveDialerConfig"></a>

```typescript
public readonly predictiveDialerConfig: ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

Predictive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#predictive_dialer_config ConnectcampaignsCampaign#predictive_dialer_config}

---

##### `progressiveDialerConfig`<sup>Optional</sup> <a name="progressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig.property.progressiveDialerConfig"></a>

```typescript
public readonly progressiveDialerConfig: ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

Progressive Dialer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#progressive_dialer_config ConnectcampaignsCampaign#progressive_dialer_config}

---

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignDialerConfigAgentlessDialerConfig: connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `dialingCapacity`<sup>Optional</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignDialerConfigPredictiveDialerConfig: connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `bandwidthAllocation`<sup>Optional</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `dialingCapacity`<sup>Optional</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignDialerConfigProgressiveDialerConfig: connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | The bandwidth allocation of a queue resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | Allocates dialing capacity for this campaign between multiple active campaigns. |

---

##### `bandwidthAllocation`<sup>Optional</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

The bandwidth allocation of a queue resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#bandwidth_allocation ConnectcampaignsCampaign#bandwidth_allocation}

---

##### `dialingCapacity`<sup>Optional</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

Allocates dialing capacity for this campaign between multiple active campaigns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#dialing_capacity ConnectcampaignsCampaign#dialing_capacity}

---

### ConnectcampaignsCampaignOutboundCallConfig <a name="ConnectcampaignsCampaignOutboundCallConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignOutboundCallConfig: connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn">connectContactFlowArn</a></code> | <code>string</code> | The identifier of the contact flow for the outbound call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig">answerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | The configuration used for answering machine detection during outbound calls. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn">connectQueueArn</a></code> | <code>string</code> | The queue for the call. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber">connectSourcePhoneNumber</a></code> | <code>string</code> | The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. |

---

##### `connectContactFlowArn`<sup>Required</sup> <a name="connectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectContactFlowArn"></a>

```typescript
public readonly connectContactFlowArn: string;
```

- *Type:* string

The identifier of the contact flow for the outbound call.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_contact_flow_arn ConnectcampaignsCampaign#connect_contact_flow_arn}

---

##### `answerMachineDetectionConfig`<sup>Optional</sup> <a name="answerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.answerMachineDetectionConfig"></a>

```typescript
public readonly answerMachineDetectionConfig: ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

The configuration used for answering machine detection during outbound calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#answer_machine_detection_config ConnectcampaignsCampaign#answer_machine_detection_config}

---

##### `connectQueueArn`<sup>Optional</sup> <a name="connectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectQueueArn"></a>

```typescript
public readonly connectQueueArn: string;
```

- *Type:* string

The queue for the call.

If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_queue_arn ConnectcampaignsCampaign#connect_queue_arn}

---

##### `connectSourcePhoneNumber`<sup>Optional</sup> <a name="connectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig.property.connectSourcePhoneNumber"></a>

```typescript
public readonly connectSourcePhoneNumber: string;
```

- *Type:* string

The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#connect_source_phone_number ConnectcampaignsCampaign#connect_source_phone_number}

---

### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig: connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt">awaitAnswerMachinePrompt</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables detection of prompts (e.g., beep after after a voicemail greeting). |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection">enableAnswerMachineDetection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to decided whether outbound calls should have answering machine detection enabled or not. |

---

##### `awaitAnswerMachinePrompt`<sup>Optional</sup> <a name="awaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.awaitAnswerMachinePrompt"></a>

```typescript
public readonly awaitAnswerMachinePrompt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables detection of prompts (e.g., beep after after a voicemail greeting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#await_answer_machine_prompt ConnectcampaignsCampaign#await_answer_machine_prompt}

---

##### `enableAnswerMachineDetection`<sup>Optional</sup> <a name="enableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig.property.enableAnswerMachineDetection"></a>

```typescript
public readonly enableAnswerMachineDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to decided whether outbound calls should have answering machine detection enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#enable_answer_machine_detection ConnectcampaignsCampaign#enable_answer_machine_detection}

---

### ConnectcampaignsCampaignTags <a name="ConnectcampaignsCampaignTags" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

const connectcampaignsCampaignTags: connectcampaignsCampaign.ConnectcampaignsCampaignTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that's 1 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#key ConnectcampaignsCampaign#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that's 1 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connectcampaigns_campaign#value ConnectcampaignsCampaign#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity">resetDialingCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDialingCapacity` <a name="resetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.resetDialingCapacity"></a>

```typescript
public resetDialingCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput">dialingCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dialingCapacityInput`<sup>Optional</sup> <a name="dialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacityInput"></a>

```typescript
public readonly dialingCapacityInput: number;
```

- *Type:* number

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig">putAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig">putPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig">putProgressiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig">resetAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig">resetPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig">resetProgressiveDialerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentlessDialerConfig` <a name="putAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig"></a>

```typescript
public putAgentlessDialerConfig(value: ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putAgentlessDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---

##### `putPredictiveDialerConfig` <a name="putPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig"></a>

```typescript
public putPredictiveDialerConfig(value: ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putPredictiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---

##### `putProgressiveDialerConfig` <a name="putProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig"></a>

```typescript
public putProgressiveDialerConfig(value: ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.putProgressiveDialerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---

##### `resetAgentlessDialerConfig` <a name="resetAgentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetAgentlessDialerConfig"></a>

```typescript
public resetAgentlessDialerConfig(): void
```

##### `resetPredictiveDialerConfig` <a name="resetPredictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetPredictiveDialerConfig"></a>

```typescript
public resetPredictiveDialerConfig(): void
```

##### `resetProgressiveDialerConfig` <a name="resetProgressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.resetProgressiveDialerConfig"></a>

```typescript
public resetProgressiveDialerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig">agentlessDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig">predictiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig">progressiveDialerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput">agentlessDialerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput">predictiveDialerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput">progressiveDialerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentlessDialerConfig`<sup>Required</sup> <a name="agentlessDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfig"></a>

```typescript
public readonly agentlessDialerConfig: ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfigOutputReference</a>

---

##### `predictiveDialerConfig`<sup>Required</sup> <a name="predictiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfig"></a>

```typescript
public readonly predictiveDialerConfig: ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference</a>

---

##### `progressiveDialerConfig`<sup>Required</sup> <a name="progressiveDialerConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfig"></a>

```typescript
public readonly progressiveDialerConfig: ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference</a>

---

##### `agentlessDialerConfigInput`<sup>Optional</sup> <a name="agentlessDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.agentlessDialerConfigInput"></a>

```typescript
public readonly agentlessDialerConfigInput: IResolvable | ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig">ConnectcampaignsCampaignDialerConfigAgentlessDialerConfig</a>

---

##### `predictiveDialerConfigInput`<sup>Optional</sup> <a name="predictiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.predictiveDialerConfigInput"></a>

```typescript
public readonly predictiveDialerConfigInput: IResolvable | ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---

##### `progressiveDialerConfigInput`<sup>Optional</sup> <a name="progressiveDialerConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.progressiveDialerConfigInput"></a>

```typescript
public readonly progressiveDialerConfigInput: IResolvable | ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfig">ConnectcampaignsCampaignDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation">resetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity">resetDialingCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthAllocation` <a name="resetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```typescript
public resetBandwidthAllocation(): void
```

##### `resetDialingCapacity` <a name="resetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.resetDialingCapacity"></a>

```typescript
public resetDialingCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput">bandwidthAllocationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput">dialingCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthAllocationInput`<sup>Optional</sup> <a name="bandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```typescript
public readonly bandwidthAllocationInput: number;
```

- *Type:* number

---

##### `dialingCapacityInput`<sup>Optional</sup> <a name="dialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```typescript
public readonly dialingCapacityInput: number;
```

- *Type:* number

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig">ConnectcampaignsCampaignDialerConfigPredictiveDialerConfig</a>

---


### ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference <a name="ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation">resetBandwidthAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity">resetDialingCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthAllocation` <a name="resetBandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetBandwidthAllocation"></a>

```typescript
public resetBandwidthAllocation(): void
```

##### `resetDialingCapacity` <a name="resetDialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.resetDialingCapacity"></a>

```typescript
public resetDialingCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput">bandwidthAllocationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput">dialingCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity">dialingCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bandwidthAllocationInput`<sup>Optional</sup> <a name="bandwidthAllocationInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocationInput"></a>

```typescript
public readonly bandwidthAllocationInput: number;
```

- *Type:* number

---

##### `dialingCapacityInput`<sup>Optional</sup> <a name="dialingCapacityInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacityInput"></a>

```typescript
public readonly dialingCapacityInput: number;
```

- *Type:* number

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.bandwidthAllocation"></a>

```typescript
public readonly bandwidthAllocation: number;
```

- *Type:* number

---

##### `dialingCapacity`<sup>Required</sup> <a name="dialingCapacity" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.dialingCapacity"></a>

```typescript
public readonly dialingCapacity: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig">ConnectcampaignsCampaignDialerConfigProgressiveDialerConfig</a>

---


### ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt">resetAwaitAnswerMachinePrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection">resetEnableAnswerMachineDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwaitAnswerMachinePrompt` <a name="resetAwaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetAwaitAnswerMachinePrompt"></a>

```typescript
public resetAwaitAnswerMachinePrompt(): void
```

##### `resetEnableAnswerMachineDetection` <a name="resetEnableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.resetEnableAnswerMachineDetection"></a>

```typescript
public resetEnableAnswerMachineDetection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput">awaitAnswerMachinePromptInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput">enableAnswerMachineDetectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt">awaitAnswerMachinePrompt</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection">enableAnswerMachineDetection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awaitAnswerMachinePromptInput`<sup>Optional</sup> <a name="awaitAnswerMachinePromptInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePromptInput"></a>

```typescript
public readonly awaitAnswerMachinePromptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAnswerMachineDetectionInput`<sup>Optional</sup> <a name="enableAnswerMachineDetectionInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetectionInput"></a>

```typescript
public readonly enableAnswerMachineDetectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `awaitAnswerMachinePrompt`<sup>Required</sup> <a name="awaitAnswerMachinePrompt" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.awaitAnswerMachinePrompt"></a>

```typescript
public readonly awaitAnswerMachinePrompt: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAnswerMachineDetection`<sup>Required</sup> <a name="enableAnswerMachineDetection" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.enableAnswerMachineDetection"></a>

```typescript
public readonly enableAnswerMachineDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---


### ConnectcampaignsCampaignOutboundCallConfigOutputReference <a name="ConnectcampaignsCampaignOutboundCallConfigOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig">putAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig">resetAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn">resetConnectQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber">resetConnectSourcePhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnswerMachineDetectionConfig` <a name="putAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig"></a>

```typescript
public putAnswerMachineDetectionConfig(value: ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.putAnswerMachineDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---

##### `resetAnswerMachineDetectionConfig` <a name="resetAnswerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetAnswerMachineDetectionConfig"></a>

```typescript
public resetAnswerMachineDetectionConfig(): void
```

##### `resetConnectQueueArn` <a name="resetConnectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectQueueArn"></a>

```typescript
public resetConnectQueueArn(): void
```

##### `resetConnectSourcePhoneNumber` <a name="resetConnectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.resetConnectSourcePhoneNumber"></a>

```typescript
public resetConnectSourcePhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig">answerMachineDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput">answerMachineDetectionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput">connectContactFlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput">connectQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput">connectSourcePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn">connectContactFlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn">connectQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber">connectSourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answerMachineDetectionConfig`<sup>Required</sup> <a name="answerMachineDetectionConfig" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfig"></a>

```typescript
public readonly answerMachineDetectionConfig: ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfigOutputReference</a>

---

##### `answerMachineDetectionConfigInput`<sup>Optional</sup> <a name="answerMachineDetectionConfigInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.answerMachineDetectionConfigInput"></a>

```typescript
public readonly answerMachineDetectionConfigInput: IResolvable | ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig">ConnectcampaignsCampaignOutboundCallConfigAnswerMachineDetectionConfig</a>

---

##### `connectContactFlowArnInput`<sup>Optional</sup> <a name="connectContactFlowArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArnInput"></a>

```typescript
public readonly connectContactFlowArnInput: string;
```

- *Type:* string

---

##### `connectQueueArnInput`<sup>Optional</sup> <a name="connectQueueArnInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArnInput"></a>

```typescript
public readonly connectQueueArnInput: string;
```

- *Type:* string

---

##### `connectSourcePhoneNumberInput`<sup>Optional</sup> <a name="connectSourcePhoneNumberInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumberInput"></a>

```typescript
public readonly connectSourcePhoneNumberInput: string;
```

- *Type:* string

---

##### `connectContactFlowArn`<sup>Required</sup> <a name="connectContactFlowArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectContactFlowArn"></a>

```typescript
public readonly connectContactFlowArn: string;
```

- *Type:* string

---

##### `connectQueueArn`<sup>Required</sup> <a name="connectQueueArn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectQueueArn"></a>

```typescript
public readonly connectQueueArn: string;
```

- *Type:* string

---

##### `connectSourcePhoneNumber`<sup>Required</sup> <a name="connectSourcePhoneNumber" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.connectSourcePhoneNumber"></a>

```typescript
public readonly connectSourcePhoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignOutboundCallConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignOutboundCallConfig">ConnectcampaignsCampaignOutboundCallConfig</a>

---


### ConnectcampaignsCampaignTagsList <a name="ConnectcampaignsCampaignTagsList" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get"></a>

```typescript
public get(index: number): ConnectcampaignsCampaignTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>[]

---


### ConnectcampaignsCampaignTagsOutputReference <a name="ConnectcampaignsCampaignTagsOutputReference" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer"></a>

```typescript
import { connectcampaignsCampaign } from '@cdktn/provider-awscc'

new connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectcampaignsCampaignTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectcampaignsCampaign.ConnectcampaignsCampaignTags">ConnectcampaignsCampaignTags</a>

---



