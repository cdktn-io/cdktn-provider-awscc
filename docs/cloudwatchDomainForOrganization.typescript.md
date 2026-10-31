# `cloudwatchDomainForOrganization` Submodule <a name="`cloudwatchDomainForOrganization` Submodule" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchDomainForOrganization <a name="CloudwatchDomainForOrganization" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization awscc_cloudwatch_domain_for_organization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainForOrganization.CloudwatchDomainForOrganization(scope: Construct, id: string, config: CloudwatchDomainForOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig">CloudwatchDomainForOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig">CloudwatchDomainForOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putIdentityProviderConfiguration">putIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetIdentityProviderConfiguration">resetIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderConfiguration` <a name="putIdentityProviderConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putIdentityProviderConfiguration"></a>

```typescript
public putIdentityProviderConfiguration(value: CloudwatchDomainForOrganizationIdentityProviderConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putIdentityProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putTags"></a>

```typescript
public putTags(value: IResolvable | CloudwatchDomainForOrganizationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]

---

##### `resetIdentityProviderConfiguration` <a name="resetIdentityProviderConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetIdentityProviderConfiguration"></a>

```typescript
public resetIdentityProviderConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchDomainForOrganization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isConstruct"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformElement"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformResource"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchDomainForOrganization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchDomainForOrganization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchDomainForOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchDomainForOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.customEndpointUrls">customEndpointUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainEndpointUrl">domainEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityCenterApplicationArn">identityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference">CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList">CloudwatchDomainForOrganizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainAccessRoleArnInput">domainAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviderConfigurationInput">identityProviderConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProvidersInput">identityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainAccessRoleArn">domainAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviders">identityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customEndpointUrls`<sup>Required</sup> <a name="customEndpointUrls" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.customEndpointUrls"></a>

```typescript
public readonly customEndpointUrls: string[];
```

- *Type:* string[]

---

##### `domainEndpointUrl`<sup>Required</sup> <a name="domainEndpointUrl" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainEndpointUrl"></a>

```typescript
public readonly domainEndpointUrl: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityCenterApplicationArn`<sup>Required</sup> <a name="identityCenterApplicationArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityCenterApplicationArn"></a>

```typescript
public readonly identityCenterApplicationArn: string;
```

- *Type:* string

---

##### `identityProviderConfiguration`<sup>Required</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference">CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tags"></a>

```typescript
public readonly tags: CloudwatchDomainForOrganizationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList">CloudwatchDomainForOrganizationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `domainAccessRoleArnInput`<sup>Optional</sup> <a name="domainAccessRoleArnInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainAccessRoleArnInput"></a>

```typescript
public readonly domainAccessRoleArnInput: string;
```

- *Type:* string

---

##### `identityProviderConfigurationInput`<sup>Optional</sup> <a name="identityProviderConfigurationInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviderConfigurationInput"></a>

```typescript
public readonly identityProviderConfigurationInput: IResolvable | CloudwatchDomainForOrganizationIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a>

---

##### `identityProvidersInput`<sup>Optional</sup> <a name="identityProvidersInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProvidersInput"></a>

```typescript
public readonly identityProvidersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CloudwatchDomainForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]

---

##### `domainAccessRoleArn`<sup>Required</sup> <a name="domainAccessRoleArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.domainAccessRoleArn"></a>

```typescript
public readonly domainAccessRoleArn: string;
```

- *Type:* string

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.identityProviders"></a>

```typescript
public readonly identityProviders: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchDomainForOrganizationConfig <a name="CloudwatchDomainForOrganizationConfig" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainForOrganizationConfig: cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.domainAccessRoleArn">domainAccessRoleArn</a></code> | <code>string</code> | The ARN of an IAM role in the management account that CloudWatch Omni assumes for domain-scoped credential vending. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.identityProviders">identityProviders</a></code> | <code>string[]</code> | The identity providers configured for the domain. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.name">name</a></code> | <code>string</code> | A name that identifies the domain. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.identityProviderConfiguration">identityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a></code> | Identity provider configuration for the domain. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainAccessRoleArn`<sup>Required</sup> <a name="domainAccessRoleArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.domainAccessRoleArn"></a>

```typescript
public readonly domainAccessRoleArn: string;
```

- *Type:* string

The ARN of an IAM role in the management account that CloudWatch Omni assumes for domain-scoped credential vending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#domain_access_role_arn CloudwatchDomainForOrganization#domain_access_role_arn}

---

##### `identityProviders`<sup>Required</sup> <a name="identityProviders" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.identityProviders"></a>

```typescript
public readonly identityProviders: string[];
```

- *Type:* string[]

The identity providers configured for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#identity_providers CloudwatchDomainForOrganization#identity_providers}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name that identifies the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#name CloudwatchDomainForOrganization#name}

---

##### `identityProviderConfiguration`<sup>Optional</sup> <a name="identityProviderConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.identityProviderConfiguration"></a>

```typescript
public readonly identityProviderConfiguration: CloudwatchDomainForOrganizationIdentityProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a>

Identity provider configuration for the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#identity_provider_configuration CloudwatchDomainForOrganization#identity_provider_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CloudwatchDomainForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#tags CloudwatchDomainForOrganization#tags}

---

### CloudwatchDomainForOrganizationIdentityProviderConfiguration <a name="CloudwatchDomainForOrganizationIdentityProviderConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainForOrganizationIdentityProviderConfiguration: cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | Identity Center configuration. Required when identityProviders includes IDC. |

---

##### `identityCenterConfiguration`<sup>Optional</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a>

Identity Center configuration. Required when identityProviders includes IDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#identity_center_configuration CloudwatchDomainForOrganization#identity_center_configuration}

---

### CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration <a name="CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration: cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | Identity Center instance ARN. |

---

##### `identityCenterInstanceArn`<sup>Optional</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

Identity Center instance ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#identity_center_instance_arn CloudwatchDomainForOrganization#identity_center_instance_arn}

---

### CloudwatchDomainForOrganizationTags <a name="CloudwatchDomainForOrganizationTags" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

const cloudwatchDomainForOrganizationTags: cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#key CloudwatchDomainForOrganization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/cloudwatch_domain_for_organization#value CloudwatchDomainForOrganization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference <a name="CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn">resetIdentityCenterInstanceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityCenterInstanceArn` <a name="resetIdentityCenterInstanceArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.resetIdentityCenterInstanceArn"></a>

```typescript
public resetIdentityCenterInstanceArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArnInput"></a>

```typescript
public readonly identityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a>

---


### CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference <a name="CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration">putIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration">resetIdentityCenterConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenterConfiguration` <a name="putIdentityCenterConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration"></a>

```typescript
public putIdentityCenterConfiguration(value: CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.putIdentityCenterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a>

---

##### `resetIdentityCenterConfiguration` <a name="resetIdentityCenterConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.resetIdentityCenterConfiguration"></a>

```typescript
public resetIdentityCenterConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration">identityCenterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput">identityCenterConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterConfiguration`<sup>Required</sup> <a name="identityCenterConfiguration" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.identityCenterConfiguration"></a>

```typescript
public readonly identityCenterConfiguration: CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfigurationOutputReference</a>

---

##### `identityCenterConfigurationInput`<sup>Optional</sup> <a name="identityCenterConfigurationInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.identityCenterConfigurationInput"></a>

```typescript
public readonly identityCenterConfigurationInput: IResolvable | CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfigurationIdentityCenterConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainForOrganizationIdentityProviderConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationIdentityProviderConfiguration">CloudwatchDomainForOrganizationIdentityProviderConfiguration</a>

---


### CloudwatchDomainForOrganizationTagsList <a name="CloudwatchDomainForOrganizationTagsList" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.get"></a>

```typescript
public get(index: number): CloudwatchDomainForOrganizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainForOrganizationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>[]

---


### CloudwatchDomainForOrganizationTagsOutputReference <a name="CloudwatchDomainForOrganizationTagsOutputReference" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer"></a>

```typescript
import { cloudwatchDomainForOrganization } from '@cdktn/provider-awscc'

new cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchDomainForOrganizationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudwatchDomainForOrganization.CloudwatchDomainForOrganizationTags">CloudwatchDomainForOrganizationTags</a>

---



