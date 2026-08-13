# `xrayResourcePolicy` Submodule <a name="`xrayResourcePolicy` Submodule" id="@cdktn/provider-awscc.xrayResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayResourcePolicy <a name="XrayResourcePolicy" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/xray_resource_policy awscc_xray_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

new xrayResourcePolicy.XrayResourcePolicy(scope: Construct, id: string, config: XrayResourcePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig">XrayResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig">XrayResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.resetBypassPolicyLockoutCheck">resetBypassPolicyLockoutCheck</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBypassPolicyLockoutCheck` <a name="resetBypassPolicyLockoutCheck" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.resetBypassPolicyLockoutCheck"></a>

```typescript
public resetBypassPolicyLockoutCheck(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XrayResourcePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isConstruct"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

xrayResourcePolicy.XrayResourcePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformElement"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

xrayResourcePolicy.XrayResourcePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformResource"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

xrayResourcePolicy.XrayResourcePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a XrayResourcePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XrayResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XrayResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/xray_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XrayResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.bypassPolicyLockoutCheckInput">bypassPolicyLockoutCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.bypassPolicyLockoutCheck">bypassPolicyLockoutCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutCheckInput`<sup>Optional</sup> <a name="bypassPolicyLockoutCheckInput" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.bypassPolicyLockoutCheckInput"></a>

```typescript
public readonly bypassPolicyLockoutCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `bypassPolicyLockoutCheck`<sup>Required</sup> <a name="bypassPolicyLockoutCheck" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.bypassPolicyLockoutCheck"></a>

```typescript
public readonly bypassPolicyLockoutCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XrayResourcePolicyConfig <a name="XrayResourcePolicyConfig" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.Initializer"></a>

```typescript
import { xrayResourcePolicy } from '@cdktn/provider-awscc'

const xrayResourcePolicyConfig: xrayResourcePolicy.XrayResourcePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | The resource policy document, which can be up to 5kb in size. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.policyName">policyName</a></code> | <code>string</code> | The name of the resource policy. Must be unique within a specific AWS account. |
| <code><a href="#@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.bypassPolicyLockoutCheck">bypassPolicyLockoutCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | A flag to indicate whether to bypass the resource policy lockout safety check. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The resource policy document, which can be up to 5kb in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/xray_resource_policy#policy_document XrayResourcePolicy#policy_document}

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

The name of the resource policy. Must be unique within a specific AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/xray_resource_policy#policy_name XrayResourcePolicy#policy_name}

---

##### `bypassPolicyLockoutCheck`<sup>Optional</sup> <a name="bypassPolicyLockoutCheck" id="@cdktn/provider-awscc.xrayResourcePolicy.XrayResourcePolicyConfig.property.bypassPolicyLockoutCheck"></a>

```typescript
public readonly bypassPolicyLockoutCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A flag to indicate whether to bypass the resource policy lockout safety check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/xray_resource_policy#bypass_policy_lockout_check XrayResourcePolicy#bypass_policy_lockout_check}

---



