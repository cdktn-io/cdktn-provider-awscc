# `servicediscoveryPublicDnsNamespace` Submodule <a name="`servicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPublicDnsNamespace <a name="ServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace(scope: Construct, id: string, config: ServicediscoveryPublicDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig">ServicediscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig">ServicediscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties"></a>

```typescript
public putProperties(value: ServicediscoveryPublicDnsNamespaceProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicediscoveryPublicDnsNamespaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryPublicDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">publicDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.properties"></a>

```typescript
public readonly properties: ServicediscoveryPublicDnsNamespacePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `publicDnsNamespaceId`<sup>Required</sup> <a name="publicDnsNamespaceId" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```typescript
public readonly publicDnsNamespaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tags"></a>

```typescript
public readonly tags: ServicediscoveryPublicDnsNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList">ServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | ServicediscoveryPublicDnsNamespaceProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicediscoveryPublicDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPublicDnsNamespaceConfig <a name="ServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPublicDnsNamespaceConfig: servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name">name</a></code> | <code>string</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description">description</a></code> | <code>string</code> | A description for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | Properties for the public DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | The tags for the namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that you want to assign to this namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#name ServicediscoveryPublicDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#description ServicediscoveryPublicDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.properties"></a>

```typescript
public readonly properties: ServicediscoveryPublicDnsNamespaceProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

Properties for the public DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#properties ServicediscoveryPublicDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicediscoveryPublicDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#tags ServicediscoveryPublicDnsNamespace#tags}

---

### ServicediscoveryPublicDnsNamespaceProperties <a name="ServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPublicDnsNamespaceProperties: servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}. |

---

##### `dnsProperties`<sup>Optional</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: ServicediscoveryPublicDnsNamespacePropertiesDnsProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#dns_properties ServicediscoveryPublicDnsNamespace#dns_properties}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPublicDnsNamespacePropertiesDnsProperties: servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}. |

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties.property.soa"></a>

```typescript
public readonly soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#soa ServicediscoveryPublicDnsNamespace#soa}.

---

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa: servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#ttl ServicediscoveryPublicDnsNamespace#ttl}.

---

### ServicediscoveryPublicDnsNamespaceTags <a name="ServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPublicDnsNamespaceTags: servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#key ServicediscoveryPublicDnsNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicediscovery_public_dns_namespace#value ServicediscoveryPublicDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">resetSoa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSoa` <a name="putSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```typescript
public putSoa(value: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `resetSoa` <a name="resetSoa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```typescript
public resetSoa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">soaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```typescript
public readonly soa: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```typescript
public readonly soaInput: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties">putDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties">resetDnsProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsProperties` <a name="putDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```typescript
public putDnsProperties(value: ServicediscoveryPublicDnsNamespacePropertiesDnsProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---

##### `resetDnsProperties` <a name="resetDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```typescript
public resetDnsProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">dnsPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsProperties`<sup>Required</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `dnsPropertiesInput`<sup>Optional</sup> <a name="dnsPropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```typescript
public readonly dnsPropertiesInput: IResolvable | ServicediscoveryPublicDnsNamespacePropertiesDnsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesDnsProperties">ServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPublicDnsNamespaceProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceProperties">ServicediscoveryPublicDnsNamespaceProperties</a>

---


### ServicediscoveryPublicDnsNamespaceTagsList <a name="ServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```typescript
public get(index: number): ServicediscoveryPublicDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPublicDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>[]

---


### ServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="ServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPublicDnsNamespaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPublicDnsNamespace.ServicediscoveryPublicDnsNamespaceTags">ServicediscoveryPublicDnsNamespaceTags</a>

---



