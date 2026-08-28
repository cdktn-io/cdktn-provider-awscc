# `appflowConnector` Submodule <a name="`appflowConnector` Submodule" id="@cdktn/provider-awscc.appflowConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppflowConnector <a name="AppflowConnector" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector awscc_appflow_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

new appflowConnector.AppflowConnector(scope: Construct, id: string, config: AppflowConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig">AppflowConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig">AppflowConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig">putConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel">resetConnectorLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorProvisioningConfig` <a name="putConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig"></a>

```typescript
public putConnectorProvisioningConfig(value: AppflowConnectorConnectorProvisioningConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.putConnectorProvisioningConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `resetConnectorLabel` <a name="resetConnectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetConnectorLabel"></a>

```typescript
public resetConnectorLabel(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

appflowConnector.AppflowConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

appflowConnector.AppflowConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

appflowConnector.AppflowConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

appflowConnector.AppflowConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppflowConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppflowConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppflowConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppflowConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput">connectorLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput">connectorProvisioningConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput">connectorProvisioningTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel">connectorLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType">connectorProvisioningType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfig"></a>

```typescript
public readonly connectorProvisioningConfig: AppflowConnectorConnectorProvisioningConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference">AppflowConnectorConnectorProvisioningConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `connectorLabelInput`<sup>Optional</sup> <a name="connectorLabelInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabelInput"></a>

```typescript
public readonly connectorLabelInput: string;
```

- *Type:* string

---

##### `connectorProvisioningConfigInput`<sup>Optional</sup> <a name="connectorProvisioningConfigInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningConfigInput"></a>

```typescript
public readonly connectorProvisioningConfigInput: IResolvable | AppflowConnectorConnectorProvisioningConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---

##### `connectorProvisioningTypeInput`<sup>Optional</sup> <a name="connectorProvisioningTypeInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningTypeInput"></a>

```typescript
public readonly connectorProvisioningTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `connectorLabel`<sup>Required</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorLabel"></a>

```typescript
public readonly connectorLabel: string;
```

- *Type:* string

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.connectorProvisioningType"></a>

```typescript
public readonly connectorProvisioningType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppflowConnectorConfig <a name="AppflowConnectorConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

const appflowConnectorConfig: appflowConnector.AppflowConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig">connectorProvisioningConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | Contains information about the configuration of the connector being registered. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType">connectorProvisioningType</a></code> | <code>string</code> | The provisioning type of the connector. Currently the only supported value is LAMBDA. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel">connectorLabel</a></code> | <code>string</code> | The name of the connector. The name is unique for each ConnectorRegistration in your AWS account. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description">description</a></code> | <code>string</code> | A description about the connector that's being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectorProvisioningConfig`<sup>Required</sup> <a name="connectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningConfig"></a>

```typescript
public readonly connectorProvisioningConfig: AppflowConnectorConnectorProvisioningConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

Contains information about the configuration of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_config AppflowConnector#connector_provisioning_config}

---

##### `connectorProvisioningType`<sup>Required</sup> <a name="connectorProvisioningType" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorProvisioningType"></a>

```typescript
public readonly connectorProvisioningType: string;
```

- *Type:* string

The provisioning type of the connector. Currently the only supported value is LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_provisioning_type AppflowConnector#connector_provisioning_type}

---

##### `connectorLabel`<sup>Optional</sup> <a name="connectorLabel" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.connectorLabel"></a>

```typescript
public readonly connectorLabel: string;
```

- *Type:* string

The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#connector_label AppflowConnector#connector_label}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description about the connector that's being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#description AppflowConnector#description}

---

### AppflowConnectorConnectorProvisioningConfig <a name="AppflowConnectorConnectorProvisioningConfig" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

const appflowConnectorConnectorProvisioningConfig: appflowConnector.AppflowConnectorConnectorProvisioningConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | Contains information about the configuration of the lambda which is being registered as the connector. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig.property.lambda"></a>

```typescript
public readonly lambda: AppflowConnectorConnectorProvisioningConfigLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

Contains information about the configuration of the lambda which is being registered as the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda AppflowConnector#lambda}

---

### AppflowConnectorConnectorProvisioningConfigLambda <a name="AppflowConnectorConnectorProvisioningConfigLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

const appflowConnectorConnectorProvisioningConfigLambda: appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | Lambda ARN of the connector being registered. |

---

##### `lambdaArn`<sup>Optional</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

Lambda ARN of the connector being registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appflow_connector#lambda_arn AppflowConnector#lambda_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### AppflowConnectorConnectorProvisioningConfigLambdaOutputReference <a name="AppflowConnectorConnectorProvisioningConfigLambdaOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

new appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn">resetLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaArn` <a name="resetLambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.resetLambdaArn"></a>

```typescript
public resetLambdaArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput">lambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn">lambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaArnInput`<sup>Optional</sup> <a name="lambdaArnInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArnInput"></a>

```typescript
public readonly lambdaArnInput: string;
```

- *Type:* string

---

##### `lambdaArn`<sup>Required</sup> <a name="lambdaArn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.lambdaArn"></a>

```typescript
public readonly lambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppflowConnectorConnectorProvisioningConfigLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---


### AppflowConnectorConnectorProvisioningConfigOutputReference <a name="AppflowConnectorConnectorProvisioningConfigOutputReference" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer"></a>

```typescript
import { appflowConnector } from '@cdktn/provider-awscc'

new appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda"></a>

```typescript
public putLambda(value: AppflowConnectorConnectorProvisioningConfigLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambda"></a>

```typescript
public readonly lambda: AppflowConnectorConnectorProvisioningConfigLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambdaOutputReference">AppflowConnectorConnectorProvisioningConfigLambdaOutputReference</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | AppflowConnectorConnectorProvisioningConfigLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigLambda">AppflowConnectorConnectorProvisioningConfigLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppflowConnectorConnectorProvisioningConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appflowConnector.AppflowConnectorConnectorProvisioningConfig">AppflowConnectorConnectorProvisioningConfig</a>

---



