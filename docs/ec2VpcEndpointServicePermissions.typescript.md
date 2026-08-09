# `ec2VpcEndpointServicePermissions` Submodule <a name="`ec2VpcEndpointServicePermissions` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointServicePermissions <a name="Ec2VpcEndpointServicePermissions" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions awscc_ec2_vpc_endpoint_service_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

new ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions(scope: Construct, id: string, config: Ec2VpcEndpointServicePermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig">Ec2VpcEndpointServicePermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig">Ec2VpcEndpointServicePermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.resetAllowedPrincipals">resetAllowedPrincipals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedPrincipals` <a name="resetAllowedPrincipals" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.resetAllowedPrincipals"></a>

```typescript
public resetAllowedPrincipals(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointServicePermissions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isConstruct"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformElement"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformResource"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcEndpointServicePermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcEndpointServicePermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcEndpointServicePermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointServicePermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.allowedPrincipalsInput">allowedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.allowedPrincipals">allowedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `allowedPrincipalsInput`<sup>Optional</sup> <a name="allowedPrincipalsInput" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.allowedPrincipalsInput"></a>

```typescript
public readonly allowedPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `allowedPrincipals`<sup>Required</sup> <a name="allowedPrincipals" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: string[];
```

- *Type:* string[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointServicePermissionsConfig <a name="Ec2VpcEndpointServicePermissionsConfig" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.Initializer"></a>

```typescript
import { ec2VpcEndpointServicePermissions } from '@cdktn/provider-awscc'

const ec2VpcEndpointServicePermissionsConfig: ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.serviceId">serviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions#service_id Ec2VpcEndpointServicePermissions#service_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.allowedPrincipals">allowedPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions#allowed_principals Ec2VpcEndpointServicePermissions#allowed_principals}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions#service_id Ec2VpcEndpointServicePermissions#service_id}.

---

##### `allowedPrincipals`<sup>Optional</sup> <a name="allowedPrincipals" id="@cdktn/provider-awscc.ec2VpcEndpointServicePermissions.Ec2VpcEndpointServicePermissionsConfig.property.allowedPrincipals"></a>

```typescript
public readonly allowedPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_service_permissions#allowed_principals Ec2VpcEndpointServicePermissions#allowed_principals}.

---



