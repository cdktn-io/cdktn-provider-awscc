# `bedrockagentcorePaymentCredentialProvider` Submodule <a name="`bedrockagentcorePaymentCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentCredentialProvider <a name="BedrockagentcorePaymentCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider(scope: Construct, id: string, config: BedrockagentcorePaymentCredentialProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput">putProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput">resetProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfigurationInput` <a name="putProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput"></a>

```typescript
public putProviderConfigurationInput(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags"></a>

```typescript
public putTags(value: IResolvable | BedrockagentcorePaymentCredentialProviderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---

##### `resetProviderConfigurationInput` <a name="resetProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput"></a>

```typescript
public resetProviderConfigurationInput(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcorePaymentCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcorePaymentCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput">providerConfigurationOutput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput">credentialProviderVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput">providerConfigurationInputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor">credentialProviderVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `providerConfigurationInput`<sup>Required</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput"></a>

```typescript
public readonly providerConfigurationInput: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a>

---

##### `providerConfigurationOutput`<sup>Required</sup> <a name="providerConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput"></a>

```typescript
public readonly providerConfigurationOutput: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags"></a>

```typescript
public readonly tags: BedrockagentcorePaymentCredentialProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a>

---

##### `credentialProviderVendorInput`<sup>Optional</sup> <a name="credentialProviderVendorInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput"></a>

```typescript
public readonly credentialProviderVendorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigurationInputInput`<sup>Optional</sup> <a name="providerConfigurationInputInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput"></a>

```typescript
public readonly providerConfigurationInputInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | BedrockagentcorePaymentCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---

##### `credentialProviderVendor`<sup>Required</sup> <a name="credentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor"></a>

```typescript
public readonly credentialProviderVendor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentCredentialProviderConfig <a name="BedrockagentcorePaymentCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderConfig: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor">credentialProviderVendor</a></code> | <code>string</code> | Supported vendor types for payment providers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name">name</a></code> | <code>string</code> | Unique name for the payment credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput">providerConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | Provider configuration input containing secrets for creation/update. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | Tags for the payment credential provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credentialProviderVendor`<sup>Required</sup> <a name="credentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor"></a>

```typescript
public readonly credentialProviderVendor: string;
```

- *Type:* string

Supported vendor types for payment providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#credential_provider_vendor BedrockagentcorePaymentCredentialProvider#credential_provider_vendor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#name BedrockagentcorePaymentCredentialProvider#name}

---

##### `providerConfigurationInput`<sup>Optional</sup> <a name="providerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput"></a>

```typescript
public readonly providerConfigurationInput: BedrockagentcorePaymentCredentialProviderProviderConfigurationInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

Provider configuration input containing secrets for creation/update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#provider_configuration_input BedrockagentcorePaymentCredentialProvider#provider_configuration_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | BedrockagentcorePaymentCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

Tags for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#tags BedrockagentcorePaymentCredentialProvider#tags}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInput: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration">coinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | Coinbase CDP configuration with API credentials. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration">stripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | Stripe Privy configuration with credentials. |

---

##### `coinbaseCdpConfiguration`<sup>Optional</sup> <a name="coinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration"></a>

```typescript
public readonly coinbaseCdpConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

Coinbase CDP configuration with API credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#coinbase_cdp_configuration BedrockagentcorePaymentCredentialProvider#coinbase_cdp_configuration}

---

##### `stripePrivyConfiguration`<sup>Optional</sup> <a name="stripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration"></a>

```typescript
public readonly stripePrivyConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

Stripe Privy configuration with credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#stripe_privy_configuration BedrockagentcorePaymentCredentialProvider#stripe_privy_configuration}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | The Coinbase CDP API key ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | The Coinbase CDP API key secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret">walletSecret</a></code> | <code>string</code> | The Coinbase CDP wallet secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig">walletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource">walletSecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `apiKeyId`<sup>Optional</sup> <a name="apiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

The Coinbase CDP API key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_id BedrockagentcorePaymentCredentialProvider#api_key_id}

---

##### `apiKeySecret`<sup>Optional</sup> <a name="apiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

The Coinbase CDP API key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret BedrockagentcorePaymentCredentialProvider#api_key_secret}

---

##### `apiKeySecretConfig`<sup>Optional</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig"></a>

```typescript
public readonly apiKeySecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_config BedrockagentcorePaymentCredentialProvider#api_key_secret_config}

---

##### `apiKeySecretSource`<sup>Optional</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_source BedrockagentcorePaymentCredentialProvider#api_key_secret_source}

---

##### `walletSecret`<sup>Optional</sup> <a name="walletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret"></a>

```typescript
public readonly walletSecret: string;
```

- *Type:* string

The Coinbase CDP wallet secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret BedrockagentcorePaymentCredentialProvider#wallet_secret}

---

##### `walletSecretConfig`<sup>Optional</sup> <a name="walletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig"></a>

```typescript
public readonly walletSecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_config BedrockagentcorePaymentCredentialProvider#wallet_secret_config}

---

##### `walletSecretSource`<sup>Optional</sup> <a name="walletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource"></a>

```typescript
public readonly walletSecretSource: string;
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_source BedrockagentcorePaymentCredentialProvider#wallet_secret_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey">jsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey">jsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId">appId</a></code> | <code>string</code> | The app ID provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret">appSecret</a></code> | <code>string</code> | The app secret provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig">appSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource">appSecretSource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId">authorizationId</a></code> | <code>string</code> | The authorization ID for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey">authorizationPrivateKey</a></code> | <code>string</code> | The authorization private key for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig">authorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource">authorizationPrivateKeySource</a></code> | <code>string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `appId`<sup>Optional</sup> <a name="appId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The app ID provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_id BedrockagentcorePaymentCredentialProvider#app_id}

---

##### `appSecret`<sup>Optional</sup> <a name="appSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

The app secret provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret BedrockagentcorePaymentCredentialProvider#app_secret}

---

##### `appSecretConfig`<sup>Optional</sup> <a name="appSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig"></a>

```typescript
public readonly appSecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_config BedrockagentcorePaymentCredentialProvider#app_secret_config}

---

##### `appSecretSource`<sup>Optional</sup> <a name="appSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource"></a>

```typescript
public readonly appSecretSource: string;
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_source BedrockagentcorePaymentCredentialProvider#app_secret_source}

---

##### `authorizationId`<sup>Optional</sup> <a name="authorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId"></a>

```typescript
public readonly authorizationId: string;
```

- *Type:* string

The authorization ID for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_id BedrockagentcorePaymentCredentialProvider#authorization_id}

---

##### `authorizationPrivateKey`<sup>Optional</sup> <a name="authorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey"></a>

```typescript
public readonly authorizationPrivateKey: string;
```

- *Type:* string

The authorization private key for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key BedrockagentcorePaymentCredentialProvider#authorization_private_key}

---

##### `authorizationPrivateKeyConfig`<sup>Optional</sup> <a name="authorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig"></a>

```typescript
public readonly authorizationPrivateKeyConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_config BedrockagentcorePaymentCredentialProvider#authorization_private_key_config}

---

##### `authorizationPrivateKeySource`<sup>Optional</sup> <a name="authorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource"></a>

```typescript
public readonly authorizationPrivateKeySource: string;
```

- *Type:* string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_source BedrockagentcorePaymentCredentialProvider#authorization_private_key_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey">jsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey">jsonKey</a></code> | <code>string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId">secretId</a></code> | <code>string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `jsonKey`<sup>Optional</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutput: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn = { ... }
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn = { ... }
```


### BedrockagentcorePaymentCredentialProviderTags <a name="BedrockagentcorePaymentCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentCredentialProviderTags: bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey">resetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey"></a>

```typescript
public resetJsonKey(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```typescript
public readonly jsonKeyInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig">putApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig">putWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId">resetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret">resetApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig">resetApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource">resetApiKeySecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret">resetWalletSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig">resetWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource">resetWalletSecretSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeySecretConfig` <a name="putApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig"></a>

```typescript
public putApiKeySecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---

##### `putWalletSecretConfig` <a name="putWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig"></a>

```typescript
public putWalletSecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---

##### `resetApiKeyId` <a name="resetApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId"></a>

```typescript
public resetApiKeyId(): void
```

##### `resetApiKeySecret` <a name="resetApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret"></a>

```typescript
public resetApiKeySecret(): void
```

##### `resetApiKeySecretConfig` <a name="resetApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig"></a>

```typescript
public resetApiKeySecretConfig(): void
```

##### `resetApiKeySecretSource` <a name="resetApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource"></a>

```typescript
public resetApiKeySecretSource(): void
```

##### `resetWalletSecret` <a name="resetWalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret"></a>

```typescript
public resetWalletSecret(): void
```

##### `resetWalletSecretConfig` <a name="resetWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig"></a>

```typescript
public resetWalletSecretConfig(): void
```

##### `resetWalletSecretSource` <a name="resetWalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource"></a>

```typescript
public resetWalletSecretSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig">apiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig">walletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput">apiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput">apiKeySecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput">apiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput">apiKeySecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput">walletSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput">walletSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput">walletSecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret">apiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret">walletSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">walletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretConfig`<sup>Required</sup> <a name="apiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig"></a>

```typescript
public readonly apiKeySecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a>

---

##### `walletSecretConfig`<sup>Required</sup> <a name="walletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig"></a>

```typescript
public readonly walletSecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a>

---

##### `apiKeyIdInput`<sup>Optional</sup> <a name="apiKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput"></a>

```typescript
public readonly apiKeyIdInput: string;
```

- *Type:* string

---

##### `apiKeySecretConfigInput`<sup>Optional</sup> <a name="apiKeySecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput"></a>

```typescript
public readonly apiKeySecretConfigInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---

##### `apiKeySecretInput`<sup>Optional</sup> <a name="apiKeySecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput"></a>

```typescript
public readonly apiKeySecretInput: string;
```

- *Type:* string

---

##### `apiKeySecretSourceInput`<sup>Optional</sup> <a name="apiKeySecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput"></a>

```typescript
public readonly apiKeySecretSourceInput: string;
```

- *Type:* string

---

##### `walletSecretConfigInput`<sup>Optional</sup> <a name="walletSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput"></a>

```typescript
public readonly walletSecretConfigInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---

##### `walletSecretInput`<sup>Optional</sup> <a name="walletSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput"></a>

```typescript
public readonly walletSecretInput: string;
```

- *Type:* string

---

##### `walletSecretSourceInput`<sup>Optional</sup> <a name="walletSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput"></a>

```typescript
public readonly walletSecretSourceInput: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `apiKeySecret`<sup>Required</sup> <a name="apiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret"></a>

```typescript
public readonly apiKeySecret: string;
```

- *Type:* string

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

---

##### `walletSecret`<sup>Required</sup> <a name="walletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret"></a>

```typescript
public readonly walletSecret: string;
```

- *Type:* string

---

##### `walletSecretSource`<sup>Required</sup> <a name="walletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```typescript
public readonly walletSecretSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey">resetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey"></a>

```typescript
public resetJsonKey(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput"></a>

```typescript
public readonly jsonKeyInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration">putCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration">putStripePrivyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration">resetCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration">resetStripePrivyConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoinbaseCdpConfiguration` <a name="putCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration"></a>

```typescript
public putCoinbaseCdpConfiguration(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---

##### `putStripePrivyConfiguration` <a name="putStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration"></a>

```typescript
public putStripePrivyConfiguration(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---

##### `resetCoinbaseCdpConfiguration` <a name="resetCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration"></a>

```typescript
public resetCoinbaseCdpConfiguration(): void
```

##### `resetStripePrivyConfiguration` <a name="resetStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration"></a>

```typescript
public resetStripePrivyConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration">coinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration">stripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput">coinbaseCdpConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput">stripePrivyConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdpConfiguration`<sup>Required</sup> <a name="coinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration"></a>

```typescript
public readonly coinbaseCdpConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a>

---

##### `stripePrivyConfiguration`<sup>Required</sup> <a name="stripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration"></a>

```typescript
public readonly stripePrivyConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a>

---

##### `coinbaseCdpConfigurationInput`<sup>Optional</sup> <a name="coinbaseCdpConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput"></a>

```typescript
public readonly coinbaseCdpConfigurationInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---

##### `stripePrivyConfigurationInput`<sup>Optional</sup> <a name="stripePrivyConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput"></a>

```typescript
public readonly stripePrivyConfigurationInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey">resetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey"></a>

```typescript
public resetJsonKey(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput"></a>

```typescript
public readonly jsonKeyInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey">resetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJsonKey` <a name="resetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey"></a>

```typescript
public resetJsonKey(): void
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput">jsonKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey">jsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonKeyInput`<sup>Optional</sup> <a name="jsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput"></a>

```typescript
public readonly jsonKeyInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `jsonKey`<sup>Required</sup> <a name="jsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey"></a>

```typescript
public readonly jsonKey: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig">putAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig">putAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId">resetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret">resetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig">resetAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource">resetAppSecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId">resetAuthorizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey">resetAuthorizationPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig">resetAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource">resetAuthorizationPrivateKeySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppSecretConfig` <a name="putAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig"></a>

```typescript
public putAppSecretConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---

##### `putAuthorizationPrivateKeyConfig` <a name="putAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig"></a>

```typescript
public putAuthorizationPrivateKeyConfig(value: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---

##### `resetAppId` <a name="resetAppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId"></a>

```typescript
public resetAppId(): void
```

##### `resetAppSecret` <a name="resetAppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret"></a>

```typescript
public resetAppSecret(): void
```

##### `resetAppSecretConfig` <a name="resetAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig"></a>

```typescript
public resetAppSecretConfig(): void
```

##### `resetAppSecretSource` <a name="resetAppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource"></a>

```typescript
public resetAppSecretSource(): void
```

##### `resetAuthorizationId` <a name="resetAuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId"></a>

```typescript
public resetAuthorizationId(): void
```

##### `resetAuthorizationPrivateKey` <a name="resetAuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey"></a>

```typescript
public resetAuthorizationPrivateKey(): void
```

##### `resetAuthorizationPrivateKeyConfig` <a name="resetAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig"></a>

```typescript
public resetAuthorizationPrivateKeyConfig(): void
```

##### `resetAuthorizationPrivateKeySource` <a name="resetAuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource"></a>

```typescript
public resetAuthorizationPrivateKeySource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig">appSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig">authorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput">appSecretConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput">appSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput">appSecretSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput">authorizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput">authorizationPrivateKeyConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput">authorizationPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput">authorizationPrivateKeySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret">appSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource">appSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId">authorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey">authorizationPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">authorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSecretConfig`<sup>Required</sup> <a name="appSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig"></a>

```typescript
public readonly appSecretConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a>

---

##### `authorizationPrivateKeyConfig`<sup>Required</sup> <a name="authorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig"></a>

```typescript
public readonly authorizationPrivateKeyConfig: BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `appSecretConfigInput`<sup>Optional</sup> <a name="appSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput"></a>

```typescript
public readonly appSecretConfigInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---

##### `appSecretInput`<sup>Optional</sup> <a name="appSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput"></a>

```typescript
public readonly appSecretInput: string;
```

- *Type:* string

---

##### `appSecretSourceInput`<sup>Optional</sup> <a name="appSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput"></a>

```typescript
public readonly appSecretSourceInput: string;
```

- *Type:* string

---

##### `authorizationIdInput`<sup>Optional</sup> <a name="authorizationIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput"></a>

```typescript
public readonly authorizationIdInput: string;
```

- *Type:* string

---

##### `authorizationPrivateKeyConfigInput`<sup>Optional</sup> <a name="authorizationPrivateKeyConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput"></a>

```typescript
public readonly authorizationPrivateKeyConfigInput: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---

##### `authorizationPrivateKeyInput`<sup>Optional</sup> <a name="authorizationPrivateKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput"></a>

```typescript
public readonly authorizationPrivateKeyInput: string;
```

- *Type:* string

---

##### `authorizationPrivateKeySourceInput`<sup>Optional</sup> <a name="authorizationPrivateKeySourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput"></a>

```typescript
public readonly authorizationPrivateKeySourceInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecret`<sup>Required</sup> <a name="appSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret"></a>

```typescript
public readonly appSecret: string;
```

- *Type:* string

---

##### `appSecretSource`<sup>Required</sup> <a name="appSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```typescript
public readonly appSecretSource: string;
```

- *Type:* string

---

##### `authorizationId`<sup>Required</sup> <a name="authorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```typescript
public readonly authorizationId: string;
```

- *Type:* string

---

##### `authorizationPrivateKey`<sup>Required</sup> <a name="authorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey"></a>

```typescript
public readonly authorizationPrivateKey: string;
```

- *Type:* string

---

##### `authorizationPrivateKeySource`<sup>Required</sup> <a name="authorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```typescript
public readonly authorizationPrivateKeySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">apiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn">apiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey">apiKeySecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">apiKeySecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn">walletSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey">walletSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">walletSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyId`<sup>Required</sup> <a name="apiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```typescript
public readonly apiKeyId: string;
```

- *Type:* string

---

##### `apiKeySecretArn`<sup>Required</sup> <a name="apiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn"></a>

```typescript
public readonly apiKeySecretArn: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a>

---

##### `apiKeySecretJsonKey`<sup>Required</sup> <a name="apiKeySecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey"></a>

```typescript
public readonly apiKeySecretJsonKey: string;
```

- *Type:* string

---

##### `apiKeySecretSource`<sup>Required</sup> <a name="apiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```typescript
public readonly apiKeySecretSource: string;
```

- *Type:* string

---

##### `walletSecretArn`<sup>Required</sup> <a name="walletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn"></a>

```typescript
public readonly walletSecretArn: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a>

---

##### `walletSecretJsonKey`<sup>Required</sup> <a name="walletSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey"></a>

```typescript
public readonly walletSecretJsonKey: string;
```

- *Type:* string

---

##### `walletSecretSource`<sup>Required</sup> <a name="walletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```typescript
public readonly walletSecretSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration">coinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration">stripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdpConfiguration`<sup>Required</sup> <a name="coinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration"></a>

```typescript
public readonly coinbaseCdpConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a>

---

##### `stripePrivyConfiguration`<sup>Required</sup> <a name="stripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration"></a>

```typescript
public readonly stripePrivyConfiguration: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn">appSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey">appSecretJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource">appSecretSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId">authorizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn">authorizationPrivateKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey">authorizationPrivateKeyJsonKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">authorizationPrivateKeySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appSecretArn`<sup>Required</sup> <a name="appSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn"></a>

```typescript
public readonly appSecretArn: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a>

---

##### `appSecretJsonKey`<sup>Required</sup> <a name="appSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey"></a>

```typescript
public readonly appSecretJsonKey: string;
```

- *Type:* string

---

##### `appSecretSource`<sup>Required</sup> <a name="appSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```typescript
public readonly appSecretSource: string;
```

- *Type:* string

---

##### `authorizationId`<sup>Required</sup> <a name="authorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```typescript
public readonly authorizationId: string;
```

- *Type:* string

---

##### `authorizationPrivateKeyArn`<sup>Required</sup> <a name="authorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn"></a>

```typescript
public readonly authorizationPrivateKeyArn: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a>

---

##### `authorizationPrivateKeyJsonKey`<sup>Required</sup> <a name="authorizationPrivateKeyJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey"></a>

```typescript
public readonly authorizationPrivateKeyJsonKey: string;
```

- *Type:* string

---

##### `authorizationPrivateKeySource`<sup>Required</sup> <a name="authorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```typescript
public readonly authorizationPrivateKeySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderTagsList <a name="BedrockagentcorePaymentCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get"></a>

```typescript
public get(index: number): BedrockagentcorePaymentCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>[]

---


### BedrockagentcorePaymentCredentialProviderTagsOutputReference <a name="BedrockagentcorePaymentCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentCredentialProvider } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentCredentialProviderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags">BedrockagentcorePaymentCredentialProviderTags</a>

---



