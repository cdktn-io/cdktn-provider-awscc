# `ssmDefaultHostManagementConfiguration` Submodule <a name="`ssmDefaultHostManagementConfiguration` Submodule" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultHostManagementConfiguration <a name="SsmDefaultHostManagementConfiguration" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

new ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration(scope: Construct, id: string, config: SsmDefaultHostManagementConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn">resetCustomerManagedRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCustomerManagedRoleArn` <a name="resetCustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn"></a>

```typescript
public resetCustomerManagedRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmDefaultHostManagementConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmDefaultHostManagementConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmDefaultHostManagementConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser">lastModifiedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn">settingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId">settingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput">customerManagedRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput">permissionModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn">customerManagedRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel">permissionModel</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `lastModifiedUser`<sup>Required</sup> <a name="lastModifiedUser" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser"></a>

```typescript
public readonly lastModifiedUser: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `settingArn`<sup>Required</sup> <a name="settingArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn"></a>

```typescript
public readonly settingArn: string;
```

- *Type:* string

---

##### `settingId`<sup>Required</sup> <a name="settingId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId"></a>

```typescript
public readonly settingId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `customerManagedRoleArnInput`<sup>Optional</sup> <a name="customerManagedRoleArnInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput"></a>

```typescript
public readonly customerManagedRoleArnInput: string;
```

- *Type:* string

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput"></a>

```typescript
public readonly permissionModelInput: string;
```

- *Type:* string

---

##### `customerManagedRoleArn`<sup>Required</sup> <a name="customerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn"></a>

```typescript
public readonly customerManagedRoleArn: string;
```

- *Type:* string

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel"></a>

```typescript
public readonly permissionModel: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultHostManagementConfigurationConfig <a name="SsmDefaultHostManagementConfigurationConfig" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.Initializer"></a>

```typescript
import { ssmDefaultHostManagementConfiguration } from '@cdktn/provider-awscc'

const ssmDefaultHostManagementConfigurationConfig: ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel">permissionModel</a></code> | <code>string</code> | The permission model used to enable DHMC. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn">customerManagedRoleArn</a></code> | <code>string</code> | The ARN of the customer-provided IAM role to register for DHMC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel"></a>

```typescript
public readonly permissionModel: string;
```

- *Type:* string

The permission model used to enable DHMC.

SERVICE_MANAGED lets SSM create and manage the DHMC IAM role on your behalf. SELF_MANAGED registers an IAM role that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#permission_model SsmDefaultHostManagementConfiguration#permission_model}

---

##### `customerManagedRoleArn`<sup>Optional</sup> <a name="customerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn"></a>

```typescript
public readonly customerManagedRoleArn: string;
```

- *Type:* string

The ARN of the customer-provided IAM role to register for DHMC.

Required when PermissionModel is SELF_MANAGED and must not be set when PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#customer_managed_role_arn SsmDefaultHostManagementConfiguration#customer_managed_role_arn}

---



