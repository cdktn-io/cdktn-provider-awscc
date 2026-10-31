# `cloudwatchDomainAccessGrantForOrganization` Submodule <a name="`cloudwatchDomainAccessGrantForOrganization` Submodule" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDomainAccessGrantForOrganization <a name="CloudwatchDomainAccessGrantForOrganization" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization awscc_cloudwatch_domain_access_grant_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization(scope: Construct, id: string, config: CloudwatchDomainAccessGrantForOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig">CloudwatchDomainAccessGrantForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal"></a>

```typescript
public putPrincipal(value: CloudwatchDomainAccessGrantForOrganizationPrincipal): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putPrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchDomainAccessGrantForOrganizationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchDomainAccessGrantForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchDomainAccessGrantForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchDomainAccessGrantForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDomainAccessGrantForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission">permission</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principal"></a>

```typescript
public readonly principal: CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference">CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tags"></a>

```typescript
public readonly tags: CloudwatchDomainAccessGrantForOrganizationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList">CloudwatchDomainAccessGrantForOrganizationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchDomainAccessGrantForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDomainAccessGrantForOrganizationConfig <a name="CloudwatchDomainAccessGrantForOrganizationConfig" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainAccessGrantForOrganizationConfig: cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId">domainId</a></code> | <code>string</code> | The unique identifier of the organization domain the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name">name</a></code> | <code>string</code> | The name of the grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission">permission</a></code> | <code>string</code> | The permission level the grant confers. Organization grants are administrative only. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The unique identifier of the organization domain the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#domain_id CloudwatchDomainAccessGrantForOrganization#domain_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#name CloudwatchDomainAccessGrantForOrganization#name}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

The permission level the grant confers. Organization grants are administrative only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#permission CloudwatchDomainAccessGrantForOrganization#permission}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.principal"></a>

```typescript
public readonly principal: CloudwatchDomainAccessGrantForOrganizationPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

The principal the grant is issued to. Supply PrincipalId, or PrincipalAttributes for an attribute-based grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal CloudwatchDomainAccessGrantForOrganization#principal}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchDomainAccessGrantForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#tags CloudwatchDomainAccessGrantForOrganization#tags}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipal <a name="CloudwatchDomainAccessGrantForOrganizationPrincipal" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainAccessGrantForOrganizationPrincipal: cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType">principalType</a></code> | <code>string</code> | The type of principal the grant is issued to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes">principalAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | Attribute key-value pairs that select the principals the grant applies to. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId">principalId</a></code> | <code>string</code> | The identifier of the principal, such as an IAM role ARN or an Identity Center user ID. |

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

The type of principal the grant is issued to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_type CloudwatchDomainAccessGrantForOrganization#principal_type}

---

##### `principalAttributes`<sup>Optional</sup> <a name="principalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalAttributes"></a>

```typescript
public readonly principalAttributes: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

Attribute key-value pairs that select the principals the grant applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_attributes CloudwatchDomainAccessGrantForOrganization#principal_attributes}

---

##### `principalId`<sup>Optional</sup> <a name="principalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The identifier of the principal, such as an IAM role ARN or an Identity Center user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#principal_id CloudwatchDomainAccessGrantForOrganization#principal_id}

---

### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes: cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key">key</a></code> | <code>string</code> | The attribute name. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value">value</a></code> | <code>string</code> | The attribute value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The attribute name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

### CloudwatchDomainAccessGrantForOrganizationTags <a name="CloudwatchDomainAccessGrantForOrganizationTags" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainAccessGrantForOrganizationTags: cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#key CloudwatchDomainAccessGrantForOrganization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_access_grant_for_organization#value CloudwatchDomainAccessGrantForOrganization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes">putPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes">resetPrincipalAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId">resetPrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalAttributes` <a name="putPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes"></a>

```typescript
public putPrincipalAttributes(value: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.putPrincipalAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---

##### `resetPrincipalAttributes` <a name="resetPrincipalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalAttributes"></a>

```typescript
public resetPrincipalAttributes(): void
```

##### `resetPrincipalId` <a name="resetPrincipalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.resetPrincipalId"></a>

```typescript
public resetPrincipalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes">principalAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput">principalAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalAttributes`<sup>Required</sup> <a name="principalAttributes" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributes"></a>

```typescript
public readonly principalAttributes: CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList</a>

---

##### `principalAttributesInput`<sup>Optional</sup> <a name="principalAttributesInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalAttributesInput"></a>

```typescript
public readonly principalAttributesInput: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipal">CloudwatchDomainAccessGrantForOrganizationPrincipal</a>

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get"></a>

```typescript
public get(index: number): CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>[]

---


### CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes">CloudwatchDomainAccessGrantForOrganizationPrincipalPrincipalAttributes</a>

---


### CloudwatchDomainAccessGrantForOrganizationTagsList <a name="CloudwatchDomainAccessGrantForOrganizationTagsList" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get"></a>

```typescript
public get(index: number): CloudwatchDomainAccessGrantForOrganizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainAccessGrantForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>[]

---


### CloudwatchDomainAccessGrantForOrganizationTagsOutputReference <a name="CloudwatchDomainAccessGrantForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainAccessGrantForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainAccessGrantForOrganizationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainAccessGrantForOrganization.CloudwatchDomainAccessGrantForOrganizationTags">CloudwatchDomainAccessGrantForOrganizationTags</a>

---



