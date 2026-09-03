# `servicediscoveryPrivateDnsNamespace` Submodule <a name="`servicediscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicediscoveryPrivateDnsNamespace <a name="ServicediscoveryPrivateDnsNamespace" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace(scope: Construct, id: string, config: ServicediscoveryPrivateDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig">ServicediscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig">ServicediscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties"></a>

```typescript
public putProperties(value: ServicediscoveryPrivateDnsNamespaceProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags"></a>

```typescript
public putTags(value: IResolvable | ServicediscoveryPrivateDnsNamespaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.resetVpc"></a>

```typescript
public resetVpc(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicediscoveryPrivateDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicediscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicediscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId">privateDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput">vpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateDnsNamespaceId`<sup>Required</sup> <a name="privateDnsNamespaceId" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId"></a>

```typescript
public readonly privateDnsNamespaceId: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.properties"></a>

```typescript
public readonly properties: ServicediscoveryPrivateDnsNamespacePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tags"></a>

```typescript
public readonly tags: ServicediscoveryPrivateDnsNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList">ServicediscoveryPrivateDnsNamespaceTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | ServicediscoveryPrivateDnsNamespaceProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ServicediscoveryPrivateDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpcInput"></a>

```typescript
public readonly vpcInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicediscoveryPrivateDnsNamespaceConfig <a name="ServicediscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPrivateDnsNamespaceConfig: servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name">name</a></code> | <code>string</code> | The name that you want to assign to this namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description">description</a></code> | <code>string</code> | A description of the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | Properties of the private DNS namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | The tags for the namespace. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc">vpc</a></code> | <code>string</code> | The ID of the Amazon VPC that you want to associate the namespace with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name that you want to assign to this namespace.

When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#name ServicediscoveryPrivateDnsNamespace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#description ServicediscoveryPrivateDnsNamespace#description}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.properties"></a>

```typescript
public readonly properties: ServicediscoveryPrivateDnsNamespaceProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

Properties of the private DNS namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#properties ServicediscoveryPrivateDnsNamespace#properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ServicediscoveryPrivateDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

The tags for the namespace.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#tags ServicediscoveryPrivateDnsNamespace#tags}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

The ID of the Amazon VPC that you want to associate the namespace with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#vpc ServicediscoveryPrivateDnsNamespace#vpc}

---

### ServicediscoveryPrivateDnsNamespaceProperties <a name="ServicediscoveryPrivateDnsNamespaceProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPrivateDnsNamespaceProperties: servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}. |

---

##### `dnsProperties`<sup>Optional</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#dns_properties ServicediscoveryPrivateDnsNamespace#dns_properties}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPrivateDnsNamespacePropertiesDnsProperties: servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}. |

---

##### `soa`<sup>Optional</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.property.soa"></a>

```typescript
public readonly soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#soa ServicediscoveryPrivateDnsNamespace#soa}.

---

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa: servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}. |

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#ttl ServicediscoveryPrivateDnsNamespace#ttl}.

---

### ServicediscoveryPrivateDnsNamespaceTags <a name="ServicediscoveryPrivateDnsNamespaceTags" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const servicediscoveryPrivateDnsNamespaceTags: servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#key ServicediscoveryPrivateDnsNamespace#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/servicediscovery_private_dns_namespace#value ServicediscoveryPrivateDnsNamespace#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa">putSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa">resetSoa</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSoa` <a name="putSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa"></a>

```typescript
public putSoa(value: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.putSoa.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `resetSoa` <a name="resetSoa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resetSoa"></a>

```typescript
public resetSoa(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput">soaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```typescript
public readonly soa: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `soaInput`<sup>Optional</sup> <a name="soaInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soaInput"></a>

```typescript
public readonly soaInput: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### ServicediscoveryPrivateDnsNamespacePropertiesOutputReference <a name="ServicediscoveryPrivateDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties">putDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties">resetDnsProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsProperties` <a name="putDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties"></a>

```typescript
public putDnsProperties(value: ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.putDnsProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---

##### `resetDnsProperties` <a name="resetDnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resetDnsProperties"></a>

```typescript
public resetDnsProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput">dnsPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsProperties`<sup>Required</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">ServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `dnsPropertiesInput`<sup>Optional</sup> <a name="dnsPropertiesInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsPropertiesInput"></a>

```typescript
public readonly dnsPropertiesInput: IResolvable | ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">ServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPrivateDnsNamespaceProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceProperties">ServicediscoveryPrivateDnsNamespaceProperties</a>

---


### ServicediscoveryPrivateDnsNamespaceTagsList <a name="ServicediscoveryPrivateDnsNamespaceTagsList" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get"></a>

```typescript
public get(index: number): ServicediscoveryPrivateDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPrivateDnsNamespaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>[]

---


### ServicediscoveryPrivateDnsNamespaceTagsOutputReference <a name="ServicediscoveryPrivateDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { servicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServicediscoveryPrivateDnsNamespaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.servicediscoveryPrivateDnsNamespace.ServicediscoveryPrivateDnsNamespaceTags">ServicediscoveryPrivateDnsNamespaceTags</a>

---



