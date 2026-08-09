# `securitylakeAwsLogSource` Submodule <a name="`securitylakeAwsLogSource` Submodule" id="@cdktn/provider-awscc.securitylakeAwsLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeAwsLogSource <a name="SecuritylakeAwsLogSource" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source awscc_securitylake_aws_log_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

new securitylakeAwsLogSource.SecuritylakeAwsLogSource(scope: Construct, id: string, config: SecuritylakeAwsLogSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetAccounts">resetAccounts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeAwsLogSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SecuritylakeAwsLogSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeAwsLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeAwsLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArnInput">dataLakeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceNameInput">sourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArn">dataLakeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `dataLakeArnInput`<sup>Optional</sup> <a name="dataLakeArnInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArnInput"></a>

```typescript
public readonly dataLakeArnInput: string;
```

- *Type:* string

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceNameInput"></a>

```typescript
public readonly sourceNameInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `dataLakeArn`<sup>Required</sup> <a name="dataLakeArn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArn"></a>

```typescript
public readonly dataLakeArn: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeAwsLogSourceConfig <a name="SecuritylakeAwsLogSourceConfig" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.Initializer"></a>

```typescript
import { securitylakeAwsLogSource } from '@cdktn/provider-awscc'

const securitylakeAwsLogSourceConfig: securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dataLakeArn">dataLakeArn</a></code> | <code>string</code> | The ARN for the data lake. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceName">sourceName</a></code> | <code>string</code> | The name for a AWS source. This must be a Regionally unique value. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | The version for a AWS source. This must be a Regionally unique value. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.accounts">accounts</a></code> | <code>string[]</code> | AWS account where you want to collect logs from. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataLakeArn`<sup>Required</sup> <a name="dataLakeArn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dataLakeArn"></a>

```typescript
public readonly dataLakeArn: string;
```

- *Type:* string

The ARN for the data lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source#data_lake_arn SecuritylakeAwsLogSource#data_lake_arn}

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

The name for a AWS source. This must be a Regionally unique value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

The version for a AWS source. This must be a Regionally unique value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

AWS account where you want to collect logs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}

---



