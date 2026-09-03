# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktn/provider-awscc.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktn/provider-awscc.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector awscc_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnector(scope: Construct, id: string, config: TransferConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig">TransferConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config">putAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig">putEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig">putSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config">resetAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig">resetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType">resetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig">resetSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAs2Config` <a name="putAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config"></a>

```typescript
public putAs2Config(value: TransferConnectorAs2Config): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `putEgressConfig` <a name="putEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig"></a>

```typescript
public putEgressConfig(value: TransferConnectorEgressConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `putSftpConfig` <a name="putSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig"></a>

```typescript
public putSftpConfig(value: TransferConnectorSftpConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags"></a>

```typescript
public putTags(value: IResolvable | TransferConnectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---

##### `resetAs2Config` <a name="resetAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config"></a>

```typescript
public resetAs2Config(): void
```

##### `resetEgressConfig` <a name="resetEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig"></a>

```typescript
public resetEgressConfig(): void
```

##### `resetEgressType` <a name="resetEgressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType"></a>

```typescript
public resetEgressType(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole"></a>

```typescript
public resetLoggingRole(): void
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```typescript
public resetSecurityPolicyName(): void
```

##### `resetSftpConfig` <a name="resetSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig"></a>

```typescript
public resetSftpConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl"></a>

```typescript
public resetUrl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

transferConnector.TransferConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

transferConnector.TransferConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

transferConnector.TransferConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

transferConnector.TransferConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config">as2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses">serviceManagedEgressIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput">accessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput">as2ConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput">egressConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput">egressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput">loggingRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput">sftpConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole">accessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType">egressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole">loggingRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `as2Config`<sup>Required</sup> <a name="as2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config"></a>

```typescript
public readonly as2Config: TransferConnectorAs2ConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `egressConfig`<sup>Required</sup> <a name="egressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig"></a>

```typescript
public readonly egressConfig: TransferConnectorEgressConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceManagedEgressIpAddresses`<sup>Required</sup> <a name="serviceManagedEgressIpAddresses" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses"></a>

```typescript
public readonly serviceManagedEgressIpAddresses: string[];
```

- *Type:* string[]

---

##### `sftpConfig`<sup>Required</sup> <a name="sftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig"></a>

```typescript
public readonly sftpConfig: TransferConnectorSftpConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags"></a>

```typescript
public readonly tags: TransferConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: string;
```

- *Type:* string

---

##### `as2ConfigInput`<sup>Optional</sup> <a name="as2ConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```typescript
public readonly as2ConfigInput: IResolvable | TransferConnectorAs2Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `egressConfigInput`<sup>Optional</sup> <a name="egressConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput"></a>

```typescript
public readonly egressConfigInput: IResolvable | TransferConnectorEgressConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `egressTypeInput`<sup>Optional</sup> <a name="egressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput"></a>

```typescript
public readonly egressTypeInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```typescript
public readonly loggingRoleInput: string;
```

- *Type:* string

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```typescript
public readonly securityPolicyNameInput: string;
```

- *Type:* string

---

##### `sftpConfigInput`<sup>Optional</sup> <a name="sftpConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```typescript
public readonly sftpConfigInput: IResolvable | TransferConnectorSftpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TransferConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

---

##### `egressType`<sup>Required</sup> <a name="egressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType"></a>

```typescript
public readonly egressType: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorAs2Config: transferConnector.TransferConnectorAs2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig">asyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | Configuration for an AS2 connector with ASYNC MDN Response. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId">basicAuthSecretId</a></code> | <code>string</code> | ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>string</code> | Compression setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Encryption algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId">localProfileId</a></code> | <code>string</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdnResponse</a></code> | <code>string</code> | MDN Response setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>string</code> | MDN Signing algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject">messageSubject</a></code> | <code>string</code> | The message subject for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType">preserveContentType</a></code> | <code>string</code> | Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | Signing algorithm for this AS2 connector configuration. |

---

##### `asyncMdnConfig`<sup>Optional</sup> <a name="asyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig"></a>

```typescript
public readonly asyncMdnConfig: TransferConnectorAs2ConfigAsyncMdnConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

Configuration for an AS2 connector with ASYNC MDN Response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#async_mdn_config TransferConnector#async_mdn_config}

---

##### `basicAuthSecretId`<sup>Optional</sup> <a name="basicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId"></a>

```typescript
public readonly basicAuthSecretId: string;
```

- *Type:* string

ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication.

If empty, Basic authentication is disabled for the AS2 connector

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#basic_auth_secret_id TransferConnector#basic_auth_secret_id}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

Compression setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#compression TransferConnector#compression}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Encryption algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}

---

##### `localProfileId`<sup>Optional</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}

---

##### `mdnResponse`<sup>Optional</sup> <a name="mdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```typescript
public readonly mdnResponse: string;
```

- *Type:* string

MDN Response setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}

---

##### `mdnSigningAlgorithm`<sup>Optional</sup> <a name="mdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```typescript
public readonly mdnSigningAlgorithm: string;
```

- *Type:* string

MDN Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}

---

##### `messageSubject`<sup>Optional</sup> <a name="messageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```typescript
public readonly messageSubject: string;
```

- *Type:* string

The message subject for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}

---

##### `partnerProfileId`<sup>Optional</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}

---

##### `preserveContentType`<sup>Optional</sup> <a name="preserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType"></a>

```typescript
public readonly preserveContentType: string;
```

- *Type:* string

Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#preserve_content_type TransferConnector#preserve_content_type}

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}

---

### TransferConnectorAs2ConfigAsyncMdnConfig <a name="TransferConnectorAs2ConfigAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorAs2ConfigAsyncMdnConfig: transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds">serverIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url">url</a></code> | <code>string</code> | URL of the server to receive the MDN response on. |

---

##### `serverIds`<sup>Optional</sup> <a name="serverIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds"></a>

```typescript
public readonly serverIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL of the server to receive the MDN response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorConfig: transferConnector.TransferConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole">accessRole</a></code> | <code>string</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config">as2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType">egressType</a></code> | <code>string</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole">loggingRole</a></code> | <code>string</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>string</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>string</code> | URL for Connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```typescript
public readonly accessRole: string;
```

- *Type:* string

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```typescript
public readonly as2Config: TransferConnectorAs2Config;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig"></a>

```typescript
public readonly egressConfig: TransferConnectorEgressConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `egressType`<sup>Optional</sup> <a name="egressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType"></a>

```typescript
public readonly egressType: string;
```

- *Type:* string

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```typescript
public readonly loggingRole: string;
```

- *Type:* string

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```typescript
public readonly securityPolicyName: string;
```

- *Type:* string

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```typescript
public readonly sftpConfig: TransferConnectorSftpConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TransferConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorEgressConfig <a name="TransferConnectorEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorEgressConfig: transferConnector.TransferConnectorEgressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}. |

---

##### `vpcLattice`<sup>Optional</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice"></a>

```typescript
public readonly vpcLattice: TransferConnectorEgressConfigVpcLattice;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}.

---

### TransferConnectorEgressConfigVpcLattice <a name="TransferConnectorEgressConfigVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorEgressConfigVpcLattice: transferConnector.TransferConnectorEgressConfigVpcLattice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber">portNumber</a></code> | <code>number</code> | Port to connect to on the target VPC Lattice resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>string</code> | ARN of the VPC Lattice resource configuration. |

---

##### `portNumber`<sup>Optional</sup> <a name="portNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber"></a>

```typescript
public readonly portNumber: number;
```

- *Type:* number

Port to connect to on the target VPC Lattice resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#port_number TransferConnector#port_number}

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn"></a>

```typescript
public readonly resourceConfigurationArn: string;
```

- *Type:* string

ARN of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#resource_configuration_arn TransferConnector#resource_configuration_arn}

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorSftpConfig: transferConnector.TransferConnectorSftpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections">maxConcurrentConnections</a></code> | <code>number</code> | Specifies the number of active connections that your connector can establish with the remote server at the same time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trustedHostKeys</a></code> | <code>string[]</code> | List of public host keys, for the external server to which you are connecting. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId">userSecretId</a></code> | <code>string</code> | ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords. |

---

##### `maxConcurrentConnections`<sup>Optional</sup> <a name="maxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections"></a>

```typescript
public readonly maxConcurrentConnections: number;
```

- *Type:* number

Specifies the number of active connections that your connector can establish with the remote server at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#max_concurrent_connections TransferConnector#max_concurrent_connections}

---

##### `trustedHostKeys`<sup>Optional</sup> <a name="trustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```typescript
public readonly trustedHostKeys: string[];
```

- *Type:* string[]

List of public host keys, for the external server to which you are connecting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}

---

##### `userSecretId`<sup>Optional</sup> <a name="userSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```typescript
public readonly userSecretId: string;
```

- *Type:* string

ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}

---

### TransferConnectorTags <a name="TransferConnectorTags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

const transferConnectorTags: transferConnector.TransferConnectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key">key</a></code> | <code>string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value">value</a></code> | <code>string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#key TransferConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_connector#value TransferConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigAsyncMdnConfigOutputReference <a name="TransferConnectorAs2ConfigAsyncMdnConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds">resetServerIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerIds` <a name="resetServerIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds"></a>

```typescript
public resetServerIds(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput">serverIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds">serverIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverIdsInput`<sup>Optional</sup> <a name="serverIdsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput"></a>

```typescript
public readonly serverIdsInput: string[];
```

- *Type:* string[]

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `serverIds`<sup>Required</sup> <a name="serverIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds"></a>

```typescript
public readonly serverIds: string[];
```

- *Type:* string[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorAs2ConfigAsyncMdnConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---


### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorAs2ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig">putAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig">resetAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId">resetBasicAuthSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId">resetLocalProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse">resetMdnResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">resetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">resetMessageSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId">resetPartnerProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType">resetPreserveContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm">resetSigningAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsyncMdnConfig` <a name="putAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig"></a>

```typescript
public putAsyncMdnConfig(value: TransferConnectorAs2ConfigAsyncMdnConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `resetAsyncMdnConfig` <a name="resetAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig"></a>

```typescript
public resetAsyncMdnConfig(): void
```

##### `resetBasicAuthSecretId` <a name="resetBasicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId"></a>

```typescript
public resetBasicAuthSecretId(): void
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression"></a>

```typescript
public resetCompression(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetLocalProfileId` <a name="resetLocalProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId"></a>

```typescript
public resetLocalProfileId(): void
```

##### `resetMdnResponse` <a name="resetMdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse"></a>

```typescript
public resetMdnResponse(): void
```

##### `resetMdnSigningAlgorithm` <a name="resetMdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```typescript
public resetMdnSigningAlgorithm(): void
```

##### `resetMessageSubject` <a name="resetMessageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```typescript
public resetMessageSubject(): void
```

##### `resetPartnerProfileId` <a name="resetPartnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId"></a>

```typescript
public resetPartnerProfileId(): void
```

##### `resetPreserveContentType` <a name="resetPreserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType"></a>

```typescript
public resetPreserveContentType(): void
```

##### `resetSigningAlgorithm` <a name="resetSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm"></a>

```typescript
public resetSigningAlgorithm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig">asyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput">asyncMdnConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput">basicAuthSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">localProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdnResponseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdnSigningAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">messageSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput">preserveContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId">basicAuthSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">localProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdnResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">messageSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partnerProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType">preserveContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asyncMdnConfig`<sup>Required</sup> <a name="asyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig"></a>

```typescript
public readonly asyncMdnConfig: TransferConnectorAs2ConfigAsyncMdnConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a>

---

##### `asyncMdnConfigInput`<sup>Optional</sup> <a name="asyncMdnConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput"></a>

```typescript
public readonly asyncMdnConfigInput: IResolvable | TransferConnectorAs2ConfigAsyncMdnConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `basicAuthSecretIdInput`<sup>Optional</sup> <a name="basicAuthSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput"></a>

```typescript
public readonly basicAuthSecretIdInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```typescript
public readonly localProfileIdInput: string;
```

- *Type:* string

---

##### `mdnResponseInput`<sup>Optional</sup> <a name="mdnResponseInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```typescript
public readonly mdnResponseInput: string;
```

- *Type:* string

---

##### `mdnSigningAlgorithmInput`<sup>Optional</sup> <a name="mdnSigningAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```typescript
public readonly mdnSigningAlgorithmInput: string;
```

- *Type:* string

---

##### `messageSubjectInput`<sup>Optional</sup> <a name="messageSubjectInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```typescript
public readonly messageSubjectInput: string;
```

- *Type:* string

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```typescript
public readonly partnerProfileIdInput: string;
```

- *Type:* string

---

##### `preserveContentTypeInput`<sup>Optional</sup> <a name="preserveContentTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput"></a>

```typescript
public readonly preserveContentTypeInput: string;
```

- *Type:* string

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `basicAuthSecretId`<sup>Required</sup> <a name="basicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId"></a>

```typescript
public readonly basicAuthSecretId: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```typescript
public readonly localProfileId: string;
```

- *Type:* string

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```typescript
public readonly mdnResponse: string;
```

- *Type:* string

---

##### `mdnSigningAlgorithm`<sup>Required</sup> <a name="mdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```typescript
public readonly mdnSigningAlgorithm: string;
```

- *Type:* string

---

##### `messageSubject`<sup>Required</sup> <a name="messageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```typescript
public readonly messageSubject: string;
```

- *Type:* string

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```typescript
public readonly partnerProfileId: string;
```

- *Type:* string

---

##### `preserveContentType`<sup>Required</sup> <a name="preserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType"></a>

```typescript
public readonly preserveContentType: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorAs2Config;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorEgressConfigOutputReference <a name="TransferConnectorEgressConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorEgressConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice">putVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice">resetVpcLattice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcLattice` <a name="putVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice"></a>

```typescript
public putVpcLattice(value: TransferConnectorEgressConfigVpcLattice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `resetVpcLattice` <a name="resetVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice"></a>

```typescript
public resetVpcLattice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput">vpcLatticeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice"></a>

```typescript
public readonly vpcLattice: TransferConnectorEgressConfigVpcLatticeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a>

---

##### `vpcLatticeInput`<sup>Optional</sup> <a name="vpcLatticeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput"></a>

```typescript
public readonly vpcLatticeInput: IResolvable | TransferConnectorEgressConfigVpcLattice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorEgressConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---


### TransferConnectorEgressConfigVpcLatticeOutputReference <a name="TransferConnectorEgressConfigVpcLatticeOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber">resetPortNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortNumber` <a name="resetPortNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber"></a>

```typescript
public resetPortNumber(): void
```

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn"></a>

```typescript
public resetResourceConfigurationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput">portNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber">portNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portNumberInput`<sup>Optional</sup> <a name="portNumberInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput"></a>

```typescript
public readonly portNumberInput: number;
```

- *Type:* number

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput"></a>

```typescript
public readonly resourceConfigurationArnInput: string;
```

- *Type:* string

---

##### `portNumber`<sup>Required</sup> <a name="portNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber"></a>

```typescript
public readonly portNumber: number;
```

- *Type:* number

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn"></a>

```typescript
public readonly resourceConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorEgressConfigVpcLattice;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorSftpConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections">resetMaxConcurrentConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">resetTrustedHostKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">resetUserSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentConnections` <a name="resetMaxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections"></a>

```typescript
public resetMaxConcurrentConnections(): void
```

##### `resetTrustedHostKeys` <a name="resetTrustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```typescript
public resetTrustedHostKeys(): void
```

##### `resetUserSecretId` <a name="resetUserSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```typescript
public resetUserSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput">maxConcurrentConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trustedHostKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">userSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections">maxConcurrentConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trustedHostKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">userSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxConcurrentConnectionsInput`<sup>Optional</sup> <a name="maxConcurrentConnectionsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput"></a>

```typescript
public readonly maxConcurrentConnectionsInput: number;
```

- *Type:* number

---

##### `trustedHostKeysInput`<sup>Optional</sup> <a name="trustedHostKeysInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```typescript
public readonly trustedHostKeysInput: string[];
```

- *Type:* string[]

---

##### `userSecretIdInput`<sup>Optional</sup> <a name="userSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```typescript
public readonly userSecretIdInput: string;
```

- *Type:* string

---

##### `maxConcurrentConnections`<sup>Required</sup> <a name="maxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections"></a>

```typescript
public readonly maxConcurrentConnections: number;
```

- *Type:* number

---

##### `trustedHostKeys`<sup>Required</sup> <a name="trustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```typescript
public readonly trustedHostKeys: string[];
```

- *Type:* string[]

---

##### `userSecretId`<sup>Required</sup> <a name="userSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```typescript
public readonly userSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorSftpConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---


### TransferConnectorTagsList <a name="TransferConnectorTagsList" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get"></a>

```typescript
public get(index: number): TransferConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>[]

---


### TransferConnectorTagsOutputReference <a name="TransferConnectorTagsOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer"></a>

```typescript
import { transferConnector } from '@cdktn/provider-awscc'

new transferConnector.TransferConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferConnectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>

---



