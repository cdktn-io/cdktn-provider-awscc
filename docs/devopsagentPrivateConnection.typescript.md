# `devopsagentPrivateConnection` Submodule <a name="`devopsagentPrivateConnection` Submodule" id="@cdktn/provider-awscc.devopsagentPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentPrivateConnection <a name="DevopsagentPrivateConnection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection awscc_devopsagent_private_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnection(scope: Construct, id: string, config: DevopsagentPrivateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig">DevopsagentPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration">putConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionConfiguration` <a name="putConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration"></a>

```typescript
public putConnectionConfiguration(value: DevopsagentPrivateConnectionConnectionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | DevopsagentPrivateConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentPrivateConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentPrivateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime">certificateExpiryTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput">connectionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateExpiryTime`<sup>Required</sup> <a name="certificateExpiryTime" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateExpiryTime"></a>

```typescript
public readonly certificateExpiryTime: string;
```

- *Type:* string

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: DevopsagentPrivateConnectionConnectionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference">DevopsagentPrivateConnectionConnectionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tags"></a>

```typescript
public readonly tags: DevopsagentPrivateConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList">DevopsagentPrivateConnectionTagsList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `connectionConfigurationInput`<sup>Optional</sup> <a name="connectionConfigurationInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.connectionConfigurationInput"></a>

```typescript
public readonly connectionConfigurationInput: IResolvable | DevopsagentPrivateConnectionConnectionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DevopsagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentPrivateConnectionConfig <a name="DevopsagentPrivateConnectionConfig" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

const devopsagentPrivateConnectionConfig: devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration">connectionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | The connection configuration for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name">name</a></code> | <code>string</code> | Unique name for this Private Connection within the account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate">certificate</a></code> | <code>string</code> | Certificate for the Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionConfiguration`<sup>Required</sup> <a name="connectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.connectionConfiguration"></a>

```typescript
public readonly connectionConfiguration: DevopsagentPrivateConnectionConnectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

The connection configuration for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#connection_configuration DevopsagentPrivateConnection#connection_configuration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for this Private Connection within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#name DevopsagentPrivateConnection#name}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Certificate for the Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#certificate DevopsagentPrivateConnection#certificate}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DevopsagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#tags DevopsagentPrivateConnection#tags}

---

### DevopsagentPrivateConnectionConnectionConfiguration <a name="DevopsagentPrivateConnectionConnectionConfiguration" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

const devopsagentPrivateConnectionConnectionConfiguration: devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | Configuration for a self-managed Private Connection. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | Configuration for a service-managed Private Connection. |

---

##### `selfManaged`<sup>Optional</sup> <a name="selfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.selfManaged"></a>

```typescript
public readonly selfManaged: DevopsagentPrivateConnectionConnectionConfigurationSelfManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

Configuration for a self-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#self_managed DevopsagentPrivateConnection#self_managed}

---

##### `serviceManaged`<sup>Optional</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration.property.serviceManaged"></a>

```typescript
public readonly serviceManaged: DevopsagentPrivateConnectionConnectionConfigurationServiceManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

Configuration for a service-managed Private Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#service_managed DevopsagentPrivateConnection#service_managed}

---

### DevopsagentPrivateConnectionConnectionConfigurationSelfManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

const devopsagentPrivateConnectionConnectionConfigurationSelfManaged: devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | The ARN of the Resource Configuration. |

---

##### `resourceConfigurationId`<sup>Optional</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

The ARN of the Resource Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#resource_configuration_id DevopsagentPrivateConnection#resource_configuration_id}

---

### DevopsagentPrivateConnectionConnectionConfigurationServiceManaged <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

const devopsagentPrivateConnectionConnectionConfigurationServiceManaged: devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress">hostAddress</a></code> | <code>string</code> | IP address or DNS name of the target resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | IP address type of the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>number</code> | Number of IPv4 addresses in each ENI for the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges">portRanges</a></code> | <code>string[]</code> | TCP port ranges that a consumer can use to access the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Security groups to attach to the service-managed Resource Gateway. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Subnets that the service-managed Resource Gateway will span. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId">vpcId</a></code> | <code>string</code> | VPC to create the service-managed Resource Gateway in. |

---

##### `dnsResolution`<sup>Optional</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#dns_resolution DevopsagentPrivateConnection#dns_resolution}

---

##### `hostAddress`<sup>Optional</sup> <a name="hostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

IP address or DNS name of the target resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#host_address DevopsagentPrivateConnection#host_address}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

IP address type of the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#ip_address_type DevopsagentPrivateConnection#ip_address_type}

---

##### `ipv4AddressesPerEni`<sup>Optional</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.ipv4AddressesPerEni"></a>

```typescript
public readonly ipv4AddressesPerEni: number;
```

- *Type:* number

Number of IPv4 addresses in each ENI for the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#ipv_4_addresses_per_eni DevopsagentPrivateConnection#ipv_4_addresses_per_eni}

---

##### `portRanges`<sup>Optional</sup> <a name="portRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

TCP port ranges that a consumer can use to access the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#port_ranges DevopsagentPrivateConnection#port_ranges}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Security groups to attach to the service-managed Resource Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#security_group_ids DevopsagentPrivateConnection#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Subnets that the service-managed Resource Gateway will span.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#subnet_ids DevopsagentPrivateConnection#subnet_ids}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

VPC to create the service-managed Resource Gateway in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#vpc_id DevopsagentPrivateConnection#vpc_id}

---

### DevopsagentPrivateConnectionTags <a name="DevopsagentPrivateConnectionTags" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

const devopsagentPrivateConnectionTags: devopsagentPrivateConnection.DevopsagentPrivateConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#key DevopsagentPrivateConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_private_connection#value DevopsagentPrivateConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentPrivateConnectionConnectionConfigurationOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged">putSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged">putServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged">resetSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged">resetServiceManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelfManaged` <a name="putSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged"></a>

```typescript
public putSelfManaged(value: DevopsagentPrivateConnectionConnectionConfigurationSelfManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `putServiceManaged` <a name="putServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged"></a>

```typescript
public putServiceManaged(value: DevopsagentPrivateConnectionConnectionConfigurationServiceManaged): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.putServiceManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `resetSelfManaged` <a name="resetSelfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetSelfManaged"></a>

```typescript
public resetSelfManaged(): void
```

##### `resetServiceManaged` <a name="resetServiceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.resetServiceManaged"></a>

```typescript
public resetServiceManaged(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged">selfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged">serviceManaged</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput">selfManagedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput">serviceManagedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selfManaged`<sup>Required</sup> <a name="selfManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManaged"></a>

```typescript
public readonly selfManaged: DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference</a>

---

##### `serviceManaged`<sup>Required</sup> <a name="serviceManaged" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManaged"></a>

```typescript
public readonly serviceManaged: DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference">DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference</a>

---

##### `selfManagedInput`<sup>Optional</sup> <a name="selfManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.selfManagedInput"></a>

```typescript
public readonly selfManagedInput: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationSelfManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---

##### `serviceManagedInput`<sup>Optional</sup> <a name="serviceManagedInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.serviceManagedInput"></a>

```typescript
public readonly serviceManagedInput: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationServiceManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentPrivateConnectionConnectionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfiguration">DevopsagentPrivateConnectionConnectionConfiguration</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId">resetResourceConfigurationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceConfigurationId` <a name="resetResourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.resetResourceConfigurationId"></a>

```typescript
public resetResourceConfigurationId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput">resourceConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationIdInput`<sup>Optional</sup> <a name="resourceConfigurationIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationIdInput"></a>

```typescript
public readonly resourceConfigurationIdInput: string;
```

- *Type:* string

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationSelfManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationSelfManaged">DevopsagentPrivateConnectionConnectionConfigurationSelfManaged</a>

---


### DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference <a name="DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution">resetDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress">resetHostAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni">resetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges">resetPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsResolution` <a name="resetDnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetDnsResolution"></a>

```typescript
public resetDnsResolution(): void
```

##### `resetHostAddress` <a name="resetHostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetHostAddress"></a>

```typescript
public resetHostAddress(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetIpv4AddressesPerEni` <a name="resetIpv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetIpv4AddressesPerEni"></a>

```typescript
public resetIpv4AddressesPerEni(): void
```

##### `resetPortRanges` <a name="resetPortRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetPortRanges"></a>

```typescript
public resetPortRanges(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput">dnsResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput">hostAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput">ipv4AddressesPerEniInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput">portRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution">dnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress">hostAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni">ipv4AddressesPerEni</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsResolutionInput`<sup>Optional</sup> <a name="dnsResolutionInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolutionInput"></a>

```typescript
public readonly dnsResolutionInput: string;
```

- *Type:* string

---

##### `hostAddressInput`<sup>Optional</sup> <a name="hostAddressInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddressInput"></a>

```typescript
public readonly hostAddressInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEniInput"></a>

```typescript
public readonly ipv4AddressesPerEniInput: number;
```

- *Type:* number

---

##### `portRangesInput`<sup>Optional</sup> <a name="portRangesInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRangesInput"></a>

```typescript
public readonly portRangesInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `dnsResolution`<sup>Required</sup> <a name="dnsResolution" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.dnsResolution"></a>

```typescript
public readonly dnsResolution: string;
```

- *Type:* string

---

##### `hostAddress`<sup>Required</sup> <a name="hostAddress" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.hostAddress"></a>

```typescript
public readonly hostAddress: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipv4AddressesPerEni`<sup>Required</sup> <a name="ipv4AddressesPerEni" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.ipv4AddressesPerEni"></a>

```typescript
public readonly ipv4AddressesPerEni: number;
```

- *Type:* number

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentPrivateConnectionConnectionConfigurationServiceManaged;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionConnectionConfigurationServiceManaged">DevopsagentPrivateConnectionConnectionConfigurationServiceManaged</a>

---


### DevopsagentPrivateConnectionTagsList <a name="DevopsagentPrivateConnectionTagsList" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get"></a>

```typescript
public get(index: number): DevopsagentPrivateConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentPrivateConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>[]

---


### DevopsagentPrivateConnectionTagsOutputReference <a name="DevopsagentPrivateConnectionTagsOutputReference" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer"></a>

```typescript
import { devopsagentPrivateConnection } from '@cdktn/provider-awscc'

new devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DevopsagentPrivateConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsagentPrivateConnection.DevopsagentPrivateConnectionTags">DevopsagentPrivateConnectionTags</a>

---



