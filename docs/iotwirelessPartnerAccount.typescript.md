# `iotwirelessPartnerAccount` Submodule <a name="`iotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.iotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessPartnerAccount <a name="IotwirelessPartnerAccount" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccount(scope: Construct, id: string, config?: IotwirelessPartnerAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig">IotwirelessPartnerAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk">putSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse">putSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate">putSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked">resetAccountLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId">resetPartnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType">resetPartnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk">resetSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse">resetSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate">resetSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSidewalk` <a name="putSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk"></a>

```typescript
public putSidewalk(value: IotwirelessPartnerAccountSidewalk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `putSidewalkResponse` <a name="putSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse"></a>

```typescript
public putSidewalkResponse(value: IotwirelessPartnerAccountSidewalkResponse): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `putSidewalkUpdate` <a name="putSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate"></a>

```typescript
public putSidewalkUpdate(value: IotwirelessPartnerAccountSidewalkUpdate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessPartnerAccountTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---

##### `resetAccountLinked` <a name="resetAccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked"></a>

```typescript
public resetAccountLinked(): void
```

##### `resetPartnerAccountId` <a name="resetPartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId"></a>

```typescript
public resetPartnerAccountId(): void
```

##### `resetPartnerType` <a name="resetPartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType"></a>

```typescript
public resetPartnerType(): void
```

##### `resetSidewalk` <a name="resetSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk"></a>

```typescript
public resetSidewalk(): void
```

##### `resetSidewalkResponse` <a name="resetSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse"></a>

```typescript
public resetSidewalkResponse(): void
```

##### `resetSidewalkUpdate` <a name="resetSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate"></a>

```typescript
public resetSidewalkUpdate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessPartnerAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput">accountLinkedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput">partnerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput">partnerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput">sidewalkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput">sidewalkResponseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput">sidewalkUpdateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked">accountLinked</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId">partnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType">partnerType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk"></a>

```typescript
public readonly sidewalk: IotwirelessPartnerAccountSidewalkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `sidewalkResponse`<sup>Required</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse"></a>

```typescript
public readonly sidewalkResponse: IotwirelessPartnerAccountSidewalkResponseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `sidewalkUpdate`<sup>Required</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```typescript
public readonly sidewalkUpdate: IotwirelessPartnerAccountSidewalkUpdateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags"></a>

```typescript
public readonly tags: IotwirelessPartnerAccountTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a>

---

##### `accountLinkedInput`<sup>Optional</sup> <a name="accountLinkedInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput"></a>

```typescript
public readonly accountLinkedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partnerAccountIdInput`<sup>Optional</sup> <a name="partnerAccountIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput"></a>

```typescript
public readonly partnerAccountIdInput: string;
```

- *Type:* string

---

##### `partnerTypeInput`<sup>Optional</sup> <a name="partnerTypeInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput"></a>

```typescript
public readonly partnerTypeInput: string;
```

- *Type:* string

---

##### `sidewalkInput`<sup>Optional</sup> <a name="sidewalkInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput"></a>

```typescript
public readonly sidewalkInput: IResolvable | IotwirelessPartnerAccountSidewalk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `sidewalkResponseInput`<sup>Optional</sup> <a name="sidewalkResponseInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput"></a>

```typescript
public readonly sidewalkResponseInput: IResolvable | IotwirelessPartnerAccountSidewalkResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `sidewalkUpdateInput`<sup>Optional</sup> <a name="sidewalkUpdateInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput"></a>

```typescript
public readonly sidewalkUpdateInput: IResolvable | IotwirelessPartnerAccountSidewalkUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessPartnerAccountTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---

##### `accountLinked`<sup>Required</sup> <a name="accountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked"></a>

```typescript
public readonly accountLinked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partnerAccountId`<sup>Required</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId"></a>

```typescript
public readonly partnerAccountId: string;
```

- *Type:* string

---

##### `partnerType`<sup>Required</sup> <a name="partnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType"></a>

```typescript
public readonly partnerType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessPartnerAccountConfig <a name="IotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const iotwirelessPartnerAccountConfig: iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked">accountLinked</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId">partnerAccountId</a></code> | <code>string</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType">partnerType</a></code> | <code>string</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountLinked`<sup>Optional</sup> <a name="accountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked"></a>

```typescript
public readonly accountLinked: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `partnerAccountId`<sup>Optional</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId"></a>

```typescript
public readonly partnerAccountId: string;
```

- *Type:* string

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `partnerType`<sup>Optional</sup> <a name="partnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType"></a>

```typescript
public readonly partnerType: string;
```

- *Type:* string

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `sidewalk`<sup>Optional</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk"></a>

```typescript
public readonly sidewalk: IotwirelessPartnerAccountSidewalk;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `sidewalkResponse`<sup>Optional</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse"></a>

```typescript
public readonly sidewalkResponse: IotwirelessPartnerAccountSidewalkResponse;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `sidewalkUpdate`<sup>Optional</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate"></a>

```typescript
public readonly sidewalkUpdate: IotwirelessPartnerAccountSidewalkUpdate;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessPartnerAccountTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

### IotwirelessPartnerAccountSidewalk <a name="IotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const iotwirelessPartnerAccountSidewalk: iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `appServerPrivateKey`<sup>Optional</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountSidewalkResponse <a name="IotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const iotwirelessPartnerAccountSidewalkResponse: iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId">amazonId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint">fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}. |

---

##### `amazonId`<sup>Optional</sup> <a name="amazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId"></a>

```typescript
public readonly amazonId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

### IotwirelessPartnerAccountSidewalkUpdate <a name="IotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const iotwirelessPartnerAccountSidewalkUpdate: iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `appServerPrivateKey`<sup>Optional</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountTags <a name="IotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

const iotwirelessPartnerAccountTags: iotwirelessPartnerAccount.IotwirelessPartnerAccountTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessPartnerAccountSidewalkOutputReference <a name="IotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey">resetAppServerPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppServerPrivateKey` <a name="resetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey"></a>

```typescript
public resetAppServerPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput">appServerPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appServerPrivateKeyInput`<sup>Optional</sup> <a name="appServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput"></a>

```typescript
public readonly appServerPrivateKeyInput: string;
```

- *Type:* string

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessPartnerAccountSidewalk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---


### IotwirelessPartnerAccountSidewalkResponseOutputReference <a name="IotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId">resetAmazonId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonId` <a name="resetAmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId"></a>

```typescript
public resetAmazonId(): void
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint"></a>

```typescript
public resetFingerprint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput">amazonIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">amazonId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amazonIdInput`<sup>Optional</sup> <a name="amazonIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput"></a>

```typescript
public readonly amazonIdInput: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput"></a>

```typescript
public readonly fingerprintInput: string;
```

- *Type:* string

---

##### `amazonId`<sup>Required</sup> <a name="amazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```typescript
public readonly amazonId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessPartnerAccountSidewalkResponse;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---


### IotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="IotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey">resetAppServerPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppServerPrivateKey` <a name="resetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey"></a>

```typescript
public resetAppServerPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput">appServerPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appServerPrivateKeyInput`<sup>Optional</sup> <a name="appServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput"></a>

```typescript
public readonly appServerPrivateKeyInput: string;
```

- *Type:* string

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```typescript
public readonly appServerPrivateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessPartnerAccountSidewalkUpdate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---


### IotwirelessPartnerAccountTagsList <a name="IotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get"></a>

```typescript
public get(index: number): IotwirelessPartnerAccountTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessPartnerAccountTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>[]

---


### IotwirelessPartnerAccountTagsOutputReference <a name="IotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessPartnerAccount } from '@cdktn/provider-awscc'

new iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessPartnerAccountTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>

---



