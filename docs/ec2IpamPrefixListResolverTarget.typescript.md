# `ec2IpamPrefixListResolverTarget` Submodule <a name="`ec2IpamPrefixListResolverTarget` Submodule" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPrefixListResolverTarget <a name="Ec2IpamPrefixListResolverTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget(scope: Construct, id: string, config: Ec2IpamPrefixListResolverTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig">Ec2IpamPrefixListResolverTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig">Ec2IpamPrefixListResolverTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion">resetDesiredVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamPrefixListResolverTargetTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]

---

##### `resetDesiredVersion` <a name="resetDesiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion"></a>

```typescript
public resetDesiredVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamPrefixListResolverTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamPrefixListResolverTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPrefixListResolverTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn">ipamPrefixListResolverTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId">ipamPrefixListResolverTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput">desiredVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput">ipamPrefixListResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput">prefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput">prefixListRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput">trackLatestVersionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion">desiredVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId">prefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion">prefixListRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion">trackLatestVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverTargetArn`<sup>Required</sup> <a name="ipamPrefixListResolverTargetArn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn"></a>

```typescript
public readonly ipamPrefixListResolverTargetArn: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverTargetId`<sup>Required</sup> <a name="ipamPrefixListResolverTargetId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId"></a>

```typescript
public readonly ipamPrefixListResolverTargetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags"></a>

```typescript
public readonly tags: Ec2IpamPrefixListResolverTargetTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a>

---

##### `desiredVersionInput`<sup>Optional</sup> <a name="desiredVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput"></a>

```typescript
public readonly desiredVersionInput: number;
```

- *Type:* number

---

##### `ipamPrefixListResolverIdInput`<sup>Optional</sup> <a name="ipamPrefixListResolverIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput"></a>

```typescript
public readonly ipamPrefixListResolverIdInput: string;
```

- *Type:* string

---

##### `prefixListIdInput`<sup>Optional</sup> <a name="prefixListIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput"></a>

```typescript
public readonly prefixListIdInput: string;
```

- *Type:* string

---

##### `prefixListRegionInput`<sup>Optional</sup> <a name="prefixListRegionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput"></a>

```typescript
public readonly prefixListRegionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamPrefixListResolverTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]

---

##### `trackLatestVersionInput`<sup>Optional</sup> <a name="trackLatestVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput"></a>

```typescript
public readonly trackLatestVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `desiredVersion`<sup>Required</sup> <a name="desiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion"></a>

```typescript
public readonly desiredVersion: number;
```

- *Type:* number

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId"></a>

```typescript
public readonly ipamPrefixListResolverId: string;
```

- *Type:* string

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

---

##### `prefixListRegion`<sup>Required</sup> <a name="prefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion"></a>

```typescript
public readonly prefixListRegion: string;
```

- *Type:* string

---

##### `trackLatestVersion`<sup>Required</sup> <a name="trackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion"></a>

```typescript
public readonly trackLatestVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPrefixListResolverTargetConfig <a name="Ec2IpamPrefixListResolverTargetConfig" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverTargetConfig: ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>string</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId">prefixListId</a></code> | <code>string</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion">prefixListRegion</a></code> | <code>string</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion">trackLatestVersion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion">desiredVersion</a></code> | <code>number</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId"></a>

```typescript
public readonly ipamPrefixListResolverId: string;
```

- *Type:* string

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `prefixListId`<sup>Required</sup> <a name="prefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId"></a>

```typescript
public readonly prefixListId: string;
```

- *Type:* string

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `prefixListRegion`<sup>Required</sup> <a name="prefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion"></a>

```typescript
public readonly prefixListRegion: string;
```

- *Type:* string

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `trackLatestVersion`<sup>Required</sup> <a name="trackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion"></a>

```typescript
public readonly trackLatestVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `desiredVersion`<sup>Optional</sup> <a name="desiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion"></a>

```typescript
public readonly desiredVersion: number;
```

- *Type:* number

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamPrefixListResolverTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

### Ec2IpamPrefixListResolverTargetTags <a name="Ec2IpamPrefixListResolverTargetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverTargetTags: ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#key Ec2IpamPrefixListResolverTarget#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_ipam_prefix_list_resolver_target#value Ec2IpamPrefixListResolverTarget#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPrefixListResolverTargetTagsList <a name="Ec2IpamPrefixListResolverTargetTagsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamPrefixListResolverTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverTargetTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>[]

---


### Ec2IpamPrefixListResolverTargetTagsOutputReference <a name="Ec2IpamPrefixListResolverTargetTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolverTarget } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverTargetTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>

---



