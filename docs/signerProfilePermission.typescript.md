# `signerProfilePermission` Submodule <a name="`signerProfilePermission` Submodule" id="@cdktn/provider-awscc.signerProfilePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerProfilePermission <a name="SignerProfilePermission" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission awscc_signer_profile_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

new signerProfilePermission.SignerProfilePermission(scope: Construct, id: string, config: SignerProfilePermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig">SignerProfilePermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig">SignerProfilePermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetProfileVersion">resetProfileVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProfileVersion` <a name="resetProfileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetProfileVersion"></a>

```typescript
public resetProfileVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SignerProfilePermission resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

signerProfilePermission.SignerProfilePermission.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

signerProfilePermission.SignerProfilePermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

signerProfilePermission.SignerProfilePermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

signerProfilePermission.SignerProfilePermission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SignerProfilePermission resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SignerProfilePermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SignerProfilePermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SignerProfilePermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersionInput">profileVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementIdInput">statementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersion">profileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementId">statementId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `profileVersionInput`<sup>Optional</sup> <a name="profileVersionInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersionInput"></a>

```typescript
public readonly profileVersionInput: string;
```

- *Type:* string

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementIdInput"></a>

```typescript
public readonly statementIdInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignerProfilePermissionConfig <a name="SignerProfilePermissionConfig" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.Initializer"></a>

```typescript
import { signerProfilePermission } from '@cdktn/provider-awscc'

const signerProfilePermissionConfig: signerProfilePermission.SignerProfilePermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.statementId">statementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileVersion">profileVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}.

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.statementId"></a>

```typescript
public readonly statementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}.

---

##### `profileVersion`<sup>Optional</sup> <a name="profileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}.

---



