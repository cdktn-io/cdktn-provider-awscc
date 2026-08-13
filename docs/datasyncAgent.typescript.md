# `datasyncAgent` Submodule <a name="`datasyncAgent` Submodule" id="@cdktn/provider-awscc.datasyncAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncAgent <a name="DatasyncAgent" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent awscc_datasync_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

new datasyncAgent.DatasyncAgent(scope: Construct, id: string, config?: DatasyncAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig">DatasyncAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig">DatasyncAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetActivationKey">resetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetAgentName">resetAgentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSecurityGroupArns">resetSecurityGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSubnetArns">resetSubnetArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags"></a>

```typescript
public putTags(value: IResolvable | DatasyncAgentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]

---

##### `resetActivationKey` <a name="resetActivationKey" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetActivationKey"></a>

```typescript
public resetActivationKey(): void
```

##### `resetAgentName` <a name="resetAgentName" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetAgentName"></a>

```typescript
public resetAgentName(): void
```

##### `resetSecurityGroupArns` <a name="resetSecurityGroupArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSecurityGroupArns"></a>

```typescript
public resetSecurityGroupArns(): void
```

##### `resetSubnetArns` <a name="resetSubnetArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetSubnetArns"></a>

```typescript
public resetSubnetArns(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

datasyncAgent.DatasyncAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

datasyncAgent.DatasyncAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

datasyncAgent.DatasyncAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

datasyncAgent.DatasyncAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatasyncAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentArn">agentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList">DatasyncAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKeyInput">activationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentNameInput">agentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArnsInput">subnetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKey">activationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentName">agentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArns">subnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentArn`<sup>Required</sup> <a name="agentArn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentArn"></a>

```typescript
public readonly agentArn: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tags"></a>

```typescript
public readonly tags: DatasyncAgentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList">DatasyncAgentTagsList</a>

---

##### `activationKeyInput`<sup>Optional</sup> <a name="activationKeyInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKeyInput"></a>

```typescript
public readonly activationKeyInput: string;
```

- *Type:* string

---

##### `agentNameInput`<sup>Optional</sup> <a name="agentNameInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentNameInput"></a>

```typescript
public readonly agentNameInput: string;
```

- *Type:* string

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `subnetArnsInput`<sup>Optional</sup> <a name="subnetArnsInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArnsInput"></a>

```typescript
public readonly subnetArnsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DatasyncAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

---

##### `agentName`<sup>Required</sup> <a name="agentName" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subnetArns`<sup>Required</sup> <a name="subnetArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.subnetArns"></a>

```typescript
public readonly subnetArns: string[];
```

- *Type:* string[]

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncAgentConfig <a name="DatasyncAgentConfig" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.Initializer"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

const datasyncAgentConfig: datasyncAgent.DatasyncAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.activationKey">activationKey</a></code> | <code>string</code> | Activation key of the Agent. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.agentName">agentName</a></code> | <code>string</code> | The name configured for the agent. Text reference used to identify the agent in the console. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | The ARNs of the security group used to protect your data transfer task subnets. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.subnetArns">subnetArns</a></code> | <code>string[]</code> | The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | The ID of the VPC endpoint that the agent has access to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

Activation key of the Agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#activation_key DatasyncAgent#activation_key}

---

##### `agentName`<sup>Optional</sup> <a name="agentName" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.agentName"></a>

```typescript
public readonly agentName: string;
```

- *Type:* string

The name configured for the agent. Text reference used to identify the agent in the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#agent_name DatasyncAgent#agent_name}

---

##### `securityGroupArns`<sup>Optional</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

The ARNs of the security group used to protect your data transfer task subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#security_group_arns DatasyncAgent#security_group_arns}

---

##### `subnetArns`<sup>Optional</sup> <a name="subnetArns" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.subnetArns"></a>

```typescript
public readonly subnetArns: string[];
```

- *Type:* string[]

The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#subnet_arns DatasyncAgent#subnet_arns}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DatasyncAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#tags DatasyncAgent#tags}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentConfig.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

The ID of the VPC endpoint that the agent has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}

---

### DatasyncAgentTags <a name="DatasyncAgentTags" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.Initializer"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

const datasyncAgentTags: datasyncAgent.DatasyncAgentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.key">key</a></code> | <code>string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.value">value</a></code> | <code>string</code> | The value for an AWS resource tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#key DatasyncAgent#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datasync_agent#value DatasyncAgent#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncAgentTagsList <a name="DatasyncAgentTagsList" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

new datasyncAgent.DatasyncAgentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get"></a>

```typescript
public get(index: number): DatasyncAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncAgentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>[]

---


### DatasyncAgentTagsOutputReference <a name="DatasyncAgentTagsOutputReference" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer"></a>

```typescript
import { datasyncAgent } from '@cdktn/provider-awscc'

new datasyncAgent.DatasyncAgentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatasyncAgentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datasyncAgent.DatasyncAgentTags">DatasyncAgentTags</a>

---



