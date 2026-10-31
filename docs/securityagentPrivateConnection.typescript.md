# `securityagentPrivateConnection` Submodule <a name="`securityagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.securityagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentPrivateConnection <a name="SecurityagentPrivateConnection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection awscc_securityagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnection(scope: Construct, id: string, config: SecurityagentPrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig">SecurityagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode">putMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMode` <a name="putMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode"></a>

```typescript
public putMode(value: SecurityagentPrivateConnectionMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | SecurityagentPrivateConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecurityagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime">certificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress">hostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput">modeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput">privateConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateExpiryTime`<sup>Required</sup> <a name="certificateExpiryTime" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateExpiryTime"></a>

```typescript
public readonly certificateExpiryTime: string;
```

- *Type:* string

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.mode"></a>

```typescript
public readonly mode: SecurityagentPrivateConnectionModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference">SecurityagentPrivateConnectionModeOutputReference</a>

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tags"></a>

```typescript
public readonly tags: SecurityagentPrivateConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList">SecurityagentPrivateConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.modeInput"></a>

```typescript
public readonly modeInput: IResolvable | SecurityagentPrivateConnectionMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---

##### `privateConnectionNameInput`<sup>Optional</sup> <a name="privateConnectionNameInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionNameInput"></a>

```typescript
public readonly privateConnectionNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SecurityagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentPrivateConnectionConfig <a name="SecurityagentPrivateConnectionConfig" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

const securityagentPrivateConnectionConfig: securityagentPrivateConnection.SecurityagentPrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName">privateConnectionName</a></code> | <code>string</code> | A unique name for the private connection within your account. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>string</code> | The PEM-encoded certificate chain for the private connection. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode">mode</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | The configuration for the private connection. Specify either a service-managed or a self-managed mode. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | The tags attached to the private connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `privateConnectionName`<sup>Required</sup> <a name="privateConnectionName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.privateConnectionName"></a>

```typescript
public readonly privateConnectionName: string;
```

- *Type:* string

A unique name for the private connection within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#private_connection_name SecurityagentPrivateConnection#private_connection_name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The PEM-encoded certificate chain for the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#certificate SecurityagentPrivateConnection#certificate}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.mode"></a>

```typescript
public readonly mode: SecurityagentPrivateConnectionMode;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

The configuration for the private connection. Specify either a service-managed or a self-managed mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#mode SecurityagentPrivateConnection#mode}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SecurityagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

The tags attached to the private connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#tags SecurityagentPrivateConnection#tags}

---

### SecurityagentPrivateConnectionMode <a name="SecurityagentPrivateConnectionMode" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

const securityagentPrivateConnectionMode: securityagentPrivateConnection.SecurityagentPrivateConnectionMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | The configuration for a self-managed private connection, where you manage your own resource configuration. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle. |

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.selfManaged"></a>

```typescript
public readonly selfManaged: SecurityagentPrivateConnectionModeSelfManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

The configuration for a self-managed private connection, where you manage your own resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#self_managed SecurityagentPrivateConnection#self_managed}

---

##### `serviceManaged`<sup>Optional</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode.property.serviceManaged"></a>

```typescript
public readonly serviceManaged: SecurityagentPrivateConnectionModeServiceManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#service_managed SecurityagentPrivateConnection#service_managed}

---

### SecurityagentPrivateConnectionModeSelfManaged <a name="SecurityagentPrivateConnectionModeSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

const securityagentPrivateConnectionModeSelfManaged: securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | The identifier or ARN of the resource configuration. |

---

##### `resourceConfigurationId`<sup>Optional</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

The identifier or ARN of the resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#resource_configuration_id SecurityagentPrivateConnection#resource_configuration_id}

---

### SecurityagentPrivateConnectionModeServiceManaged <a name="SecurityagentPrivateConnectionModeServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

const securityagentPrivateConnectionModeServiceManaged: securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | The DNS resolution mode for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress">hostAddress</a></code> | <code>string</code> | The IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address type of the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>number</code> | The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges">portRanges</a></code> | <code>string[]</code> | The TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The security groups to attach to the service-managed resource gateway. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The subnets that the service-managed resource gateway spans. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId">vpcId</a></code> | <code>string</code> | The VPC to create the service-managed resource gateway in. |

---

##### `dnsResolution`<sup>Optional</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

The DNS resolution mode for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#dns_resolution SecurityagentPrivateConnection#dns_resolution}

---

##### `hostAddress`<sup>Optional</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

The IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#host_address SecurityagentPrivateConnection#host_address}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address type of the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ip_address_type SecurityagentPrivateConnection#ip_address_type}

---

##### `ipv4AddressesPerEni`<sup>Optional</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.ipv4AddressesPerEni"></a>

```typescript
public readonly ipv4AddressesPerEni: number;
```

- *Type:* number

The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#ipv_4_addresses_per_eni SecurityagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

The TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#port_ranges SecurityagentPrivateConnection#port_ranges}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The security groups to attach to the service-managed resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#security_group_ids SecurityagentPrivateConnection#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The subnets that the service-managed resource gateway spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#subnet_ids SecurityagentPrivateConnection#subnet_ids}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VPC to create the service-managed resource gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#vpc_id SecurityagentPrivateConnection#vpc_id}

---

### SecurityagentPrivateConnectionTags <a name="SecurityagentPrivateConnectionTags" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

const securityagentPrivateConnectionTags: securityagentPrivateConnection.SecurityagentPrivateConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#key SecurityagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/securityagent_private_connection#value SecurityagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentPrivateConnectionModeOutputReference <a name="SecurityagentPrivateConnectionModeOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged">putServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged">resetServiceManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged"></a>

```typescript
public putSelfManaged(value: SecurityagentPrivateConnectionModeSelfManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `putServiceManaged` <a name="putServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged"></a>

```typescript
public putServiceManaged(value: SecurityagentPrivateConnectionModeServiceManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetSelfManaged"></a>

```typescript
public resetSelfManaged(): void
```

##### `resetServiceManaged` <a name="resetServiceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.resetServiceManaged"></a>

```typescript
public resetServiceManaged(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput">selfManagedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput">serviceManagedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManaged"></a>

```typescript
public readonly selfManaged: SecurityagentPrivateConnectionModeSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference">SecurityagentPrivateConnectionModeSelfManagedOutputReference</a>

---

##### `serviceManaged`<sup>Required</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManaged"></a>

```typescript
public readonly serviceManaged: SecurityagentPrivateConnectionModeServiceManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference">SecurityagentPrivateConnectionModeServiceManagedOutputReference</a>

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.selfManagedInput"></a>

```typescript
public readonly selfManagedInput: IResolvable | SecurityagentPrivateConnectionModeSelfManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---

##### `serviceManagedInput`<sup>Optional</sup> <a name="serviceManagedInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.serviceManagedInput"></a>

```typescript
public readonly serviceManagedInput: IResolvable | SecurityagentPrivateConnectionModeServiceManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentPrivateConnectionMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionMode">SecurityagentPrivateConnectionMode</a>

---


### SecurityagentPrivateConnectionModeSelfManagedOutputReference <a name="SecurityagentPrivateConnectionModeSelfManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId">resetResourceConfigurationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationId` <a name="resetResourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.resetResourceConfigurationId"></a>

```typescript
public resetResourceConfigurationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput">resourceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationIdInput`<sup>Optional</sup> <a name="resourceConfigurationIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```typescript
public readonly resourceConfigurationIdInput: string;
```

- *Type:* string

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentPrivateConnectionModeSelfManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeSelfManaged">SecurityagentPrivateConnectionModeSelfManaged</a>

---


### SecurityagentPrivateConnectionModeServiceManagedOutputReference <a name="SecurityagentPrivateConnectionModeServiceManagedOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution">resetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress">resetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni">resetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsResolution` <a name="resetDnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetDnsResolution"></a>

```typescript
public resetDnsResolution(): void
```

##### `resetHostAddress` <a name="resetHostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetHostAddress"></a>

```typescript
public resetHostAddress(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetIpv4AddressesPerEni` <a name="resetIpv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```typescript
public resetIpv4AddressesPerEni(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput">dnsResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput">hostAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4AddressesPerEniInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress">hostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsResolutionInput`<sup>Optional</sup> <a name="dnsResolutionInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolutionInput"></a>

```typescript
public readonly dnsResolutionInput: string;
```

- *Type:* string

---

##### `hostAddressInput`<sup>Optional</sup> <a name="hostAddressInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddressInput"></a>

```typescript
public readonly hostAddressInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```typescript
public readonly ipv4AddressesPerEniInput: number;
```

- *Type:* number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipv4AddressesPerEni`<sup>Required</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```typescript
public readonly ipv4AddressesPerEni: number;
```

- *Type:* number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentPrivateConnectionModeServiceManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionModeServiceManaged">SecurityagentPrivateConnectionModeServiceManaged</a>

---


### SecurityagentPrivateConnectionTagsList <a name="SecurityagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get"></a>

```typescript
public get(index: number): SecurityagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>[]

---


### SecurityagentPrivateConnectionTagsOutputReference <a name="SecurityagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer"></a>

```typescript
import { securityagentPrivateConnection } from '@cdktn/provider-awscc'

new securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SecurityagentPrivateConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.securityagentPrivateConnection.SecurityagentPrivateConnectionTags">SecurityagentPrivateConnectionTags</a>

---



