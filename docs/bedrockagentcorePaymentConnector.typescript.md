# `bedrockagentcorePaymentConnector` Submodule <a name="`bedrockagentcorePaymentConnector` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentConnector <a name="BedrockagentcorePaymentConnector" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector(scope: Construct, id: string, config: BedrockagentcorePaymentConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig">BedrockagentcorePaymentConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig">BedrockagentcorePaymentConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations">putCredentialProviderConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentialProviderConfigurations` <a name="putCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations"></a>

```typescript
public putCredentialProviderConfigurations(value: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcorePaymentConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcorePaymentConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt">connectorCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt">connectorLastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus">connectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn">paymentConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId">paymentConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput">connectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput">connectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput">credentialProviderConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput">paymentManagerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId">paymentManagerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorCreatedAt`<sup>Required</sup> <a name="connectorCreatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt"></a>

```typescript
public readonly connectorCreatedAt: string;
```

- *Type:* string

---

##### `connectorLastUpdatedAt`<sup>Required</sup> <a name="connectorLastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt"></a>

```typescript
public readonly connectorLastUpdatedAt: string;
```

- *Type:* string

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus"></a>

```typescript
public readonly connectorStatus: string;
```

- *Type:* string

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `paymentConnectorArn`<sup>Required</sup> <a name="paymentConnectorArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn"></a>

```typescript
public readonly paymentConnectorArn: string;
```

- *Type:* string

---

##### `paymentConnectorId`<sup>Required</sup> <a name="paymentConnectorId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId"></a>

```typescript
public readonly paymentConnectorId: string;
```

- *Type:* string

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput"></a>

```typescript
public readonly connectorNameInput: string;
```

- *Type:* string

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput"></a>

```typescript
public readonly connectorTypeInput: string;
```

- *Type:* string

---

##### `credentialProviderConfigurationsInput`<sup>Optional</sup> <a name="credentialProviderConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput"></a>

```typescript
public readonly credentialProviderConfigurationsInput: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `paymentManagerIdInput`<sup>Optional</sup> <a name="paymentManagerIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput"></a>

```typescript
public readonly paymentManagerIdInput: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId"></a>

```typescript
public readonly paymentManagerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentConnectorConfig <a name="BedrockagentcorePaymentConnectorConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentConnectorConfig: bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName">connectorName</a></code> | <code>string</code> | The name of the payment connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType">connectorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations">credentialProviderConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]</code> | The credential provider configurations for the connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId">paymentManagerId</a></code> | <code>string</code> | The identifier of the parent payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description">description</a></code> | <code>string</code> | A description of the payment connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The name of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#connector_name BedrockagentcorePaymentConnector#connector_name}

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}.

---

##### `credentialProviderConfigurations`<sup>Required</sup> <a name="credentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations"></a>

```typescript
public readonly credentialProviderConfigurations: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]

The credential provider configurations for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_configurations BedrockagentcorePaymentConnector#credential_provider_configurations}

---

##### `paymentManagerId`<sup>Required</sup> <a name="paymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId"></a>

```typescript
public readonly paymentManagerId: string;
```

- *Type:* string

The identifier of the parent payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#payment_manager_id BedrockagentcorePaymentConnector#payment_manager_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#description BedrockagentcorePaymentConnector#description}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurations <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentConnectorCredentialProviderConfigurations: bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp">coinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy">stripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}. |

---

##### `coinbaseCdp`<sup>Optional</sup> <a name="coinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp"></a>

```typescript
public readonly coinbaseCdp: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}.

---

##### `stripePrivy`<sup>Optional</sup> <a name="stripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy"></a>

```typescript
public readonly stripePrivy: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}.

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp: bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | The ARN of the payment credential provider. |

---

##### `credentialProviderArn`<sup>Optional</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

const bedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy: bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | The ARN of the payment credential provider. |

---

##### `credentialProviderArn`<sup>Optional</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn">resetCredentialProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialProviderArn` <a name="resetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn"></a>

```typescript
public resetCredentialProviderArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput">credentialProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderArnInput`<sup>Optional</sup> <a name="credentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput"></a>

```typescript
public readonly credentialProviderArnInput: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get"></a>

```typescript
public get(index: number): BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>[]

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp">putCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy">putStripePrivy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp">resetCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy">resetStripePrivy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoinbaseCdp` <a name="putCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp"></a>

```typescript
public putCoinbaseCdp(value: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---

##### `putStripePrivy` <a name="putStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy"></a>

```typescript
public putStripePrivy(value: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---

##### `resetCoinbaseCdp` <a name="resetCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp"></a>

```typescript
public resetCoinbaseCdp(): void
```

##### `resetStripePrivy` <a name="resetStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy"></a>

```typescript
public resetStripePrivy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp">coinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy">stripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput">coinbaseCdpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput">stripePrivyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coinbaseCdp`<sup>Required</sup> <a name="coinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp"></a>

```typescript
public readonly coinbaseCdp: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a>

---

##### `stripePrivy`<sup>Required</sup> <a name="stripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy"></a>

```typescript
public readonly stripePrivy: BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a>

---

##### `coinbaseCdpInput`<sup>Optional</sup> <a name="coinbaseCdpInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput"></a>

```typescript
public readonly coinbaseCdpInput: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---

##### `stripePrivyInput`<sup>Optional</sup> <a name="stripePrivyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput"></a>

```typescript
public readonly stripePrivyInput: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations">BedrockagentcorePaymentConnectorCredentialProviderConfigurations</a>

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer"></a>

```typescript
import { bedrockagentcorePaymentConnector } from '@cdktn/provider-awscc'

new bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn">resetCredentialProviderArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialProviderArn` <a name="resetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn"></a>

```typescript
public resetCredentialProviderArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput">credentialProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn">credentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialProviderArnInput`<sup>Optional</sup> <a name="credentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput"></a>

```typescript
public readonly credentialProviderArnInput: string;
```

- *Type:* string

---

##### `credentialProviderArn`<sup>Required</sup> <a name="credentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn"></a>

```typescript
public readonly credentialProviderArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---



