# `ec2IpamPrefixListResolver` Submodule <a name="`ec2IpamPrefixListResolver` Submodule" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPrefixListResolver <a name="Ec2IpamPrefixListResolver" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver(scope: Construct, id: string, config: Ec2IpamPrefixListResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig">Ec2IpamPrefixListResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig">Ec2IpamPrefixListResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetIpamId">resetIpamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putRules"></a>

```typescript
public putRules(value: IResolvable | Ec2IpamPrefixListResolverRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2IpamPrefixListResolverTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIpamId` <a name="resetIpamId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetIpamId"></a>

```typescript
public resetIpamId(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isConstruct"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformElement"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformResource"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2IpamPrefixListResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2IpamPrefixListResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPrefixListResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamPrefixListResolverArn">ipamPrefixListResolverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList">Ec2IpamPrefixListResolverRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList">Ec2IpamPrefixListResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamIdInput">ipamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.rulesInput">rulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverArn`<sup>Required</sup> <a name="ipamPrefixListResolverArn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamPrefixListResolverArn"></a>

```typescript
public readonly ipamPrefixListResolverArn: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamPrefixListResolverId"></a>

```typescript
public readonly ipamPrefixListResolverId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.rules"></a>

```typescript
public readonly rules: Ec2IpamPrefixListResolverRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList">Ec2IpamPrefixListResolverRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tags"></a>

```typescript
public readonly tags: Ec2IpamPrefixListResolverTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList">Ec2IpamPrefixListResolverTagsList</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ipamIdInput`<sup>Optional</sup> <a name="ipamIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamIdInput"></a>

```typescript
public readonly ipamIdInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | Ec2IpamPrefixListResolverRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2IpamPrefixListResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPrefixListResolverConfig <a name="Ec2IpamPrefixListResolverConfig" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverConfig: ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | The address family of the address space in this Prefix List Resolver. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#description Ec2IpamPrefixListResolver#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.ipamId">ipamId</a></code> | <code>string</code> | The Id of the IPAM this Prefix List Resolver is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.rules">rules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]</code> | Rules define the business logic for selecting CIDRs from IPAM. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

The address family of the address space in this Prefix List Resolver. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#address_family Ec2IpamPrefixListResolver#address_family}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#description Ec2IpamPrefixListResolver#description}.

---

##### `ipamId`<sup>Optional</sup> <a name="ipamId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

The Id of the IPAM this Prefix List Resolver is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_id Ec2IpamPrefixListResolver#ipam_id}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | Ec2IpamPrefixListResolverRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]

Rules define the business logic for selecting CIDRs from IPAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#rules Ec2IpamPrefixListResolver#rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2IpamPrefixListResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#tags Ec2IpamPrefixListResolver#tags}

---

### Ec2IpamPrefixListResolverRules <a name="Ec2IpamPrefixListResolverRules" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverRules: ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]</code> | Two of the rule types allow you to add conditions to the rules. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | This rule will only match resources that are in this IPAM Scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.resourceType">resourceType</a></code> | <code>string</code> | The resourceType property only applies to ipam-resource-cidr rules; |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.ruleType">ruleType</a></code> | <code>string</code> | There are three rule types: (1) Static CIDR: A fixed list of CIDRs that don't change (like a manual list replicated across Regions). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.staticCidr">staticCidr</a></code> | <code>string</code> | A fixed CIDR that doesn't change. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | Ec2IpamPrefixListResolverRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]

Two of the rule types allow you to add conditions to the rules.

(1) For IPAM Pool CIDR rules, you can specify an ipamPoolId; if not specified, the rule will apply to all IPAM Pool CIDRs in the scope.  (2) For IPAM Resource CIDR rules, you can specify resourceId, resourceOwner, resourceRegion, cidr, or resourceTag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#conditions Ec2IpamPrefixListResolver#conditions}

---

##### `ipamScopeId`<sup>Optional</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

This rule will only match resources that are in this IPAM Scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_scope_id Ec2IpamPrefixListResolver#ipam_scope_id}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resourceType property only applies to ipam-resource-cidr rules;

this property specifies what type of resources this rule will apply to, such as VPCs or Subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_type Ec2IpamPrefixListResolver#resource_type}

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

There are three rule types: (1) Static CIDR: A fixed list of CIDRs that don't change (like a manual list replicated across Regions).

(2) IPAM pool CIDR: CIDRs from specific IPAM pools (like all CIDRs from your IPAM production pool).  (3) IPAM resource CIDR: CIDRs for AWS resources like VPCs, subnets, and EIPs within a specific IPAM scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#rule_type Ec2IpamPrefixListResolver#rule_type}

---

##### `staticCidr`<sup>Optional</sup> <a name="staticCidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules.property.staticCidr"></a>

```typescript
public readonly staticCidr: string;
```

- *Type:* string

A fixed CIDR that doesn't change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#static_cidr Ec2IpamPrefixListResolver#static_cidr}

---

### Ec2IpamPrefixListResolverRulesConditions <a name="Ec2IpamPrefixListResolverRulesConditions" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverRulesConditions: ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.cidr">cidr</a></code> | <code>string</code> | Condition for the IPAM Resource CIDR rule type.  CIDR (like 10.24.34.0/23). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Condition for the IPAM Pool CIDR rule type. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.operation">operation</a></code> | <code>string</code> | Equals, Not equals, or Subnet Of.  The subnet-of operation only applies to cidr conditions. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceId">resourceId</a></code> | <code>string</code> | Condition for the IPAM Resource CIDR rule type.  The unique ID of a resource (like vpc-1234567890abcdef0). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | Condition for the IPAM Resource CIDR rule type.  Resource owner (like 111122223333). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | Condition for the IPAM Resource CIDR rule type.  Resource region (like us-east-1). |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | Condition for the IPAM Resource CIDR rule type.  Resource Tag (like dev-vpc-1). |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Condition for the IPAM Resource CIDR rule type.  CIDR (like 10.24.34.0/23).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#cidr Ec2IpamPrefixListResolver#cidr}

---

##### `ipamPoolId`<sup>Optional</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Condition for the IPAM Pool CIDR rule type.

If not chosen, the resolver applies to all IPAM Pool CIDRs in the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#ipam_pool_id Ec2IpamPrefixListResolver#ipam_pool_id}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Equals, Not equals, or Subnet Of.  The subnet-of operation only applies to cidr conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#operation Ec2IpamPrefixListResolver#operation}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Condition for the IPAM Resource CIDR rule type.  The unique ID of a resource (like vpc-1234567890abcdef0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_id Ec2IpamPrefixListResolver#resource_id}

---

##### `resourceOwner`<sup>Optional</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

Condition for the IPAM Resource CIDR rule type.  Resource owner (like 111122223333).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_owner Ec2IpamPrefixListResolver#resource_owner}

---

##### `resourceRegion`<sup>Optional</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

Condition for the IPAM Resource CIDR rule type.  Resource region (like us-east-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_region Ec2IpamPrefixListResolver#resource_region}

---

##### `resourceTag`<sup>Optional</sup> <a name="resourceTag" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions.property.resourceTag"></a>

```typescript
public readonly resourceTag: Ec2IpamPrefixListResolverRulesConditionsResourceTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a>

Condition for the IPAM Resource CIDR rule type.  Resource Tag (like dev-vpc-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#resource_tag Ec2IpamPrefixListResolver#resource_tag}

---

### Ec2IpamPrefixListResolverRulesConditionsResourceTag <a name="Ec2IpamPrefixListResolverRulesConditionsResourceTag" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverRulesConditionsResourceTag: ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#key Ec2IpamPrefixListResolver#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#value Ec2IpamPrefixListResolver#value}

---

### Ec2IpamPrefixListResolverTags <a name="Ec2IpamPrefixListResolverTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const ec2IpamPrefixListResolverTags: ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#key Ec2IpamPrefixListResolver#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_prefix_list_resolver#value Ec2IpamPrefixListResolver#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPrefixListResolverRulesConditionsList <a name="Ec2IpamPrefixListResolverRulesConditionsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.get"></a>

```typescript
public get(index: number): Ec2IpamPrefixListResolverRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]

---


### Ec2IpamPrefixListResolverRulesConditionsOutputReference <a name="Ec2IpamPrefixListResolverRulesConditionsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.putResourceTag">putResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetIpamPoolId">resetIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceOwner">resetResourceOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceRegion">resetResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceTag">resetResourceTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceTag` <a name="putResourceTag" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.putResourceTag"></a>

```typescript
public putResourceTag(value: Ec2IpamPrefixListResolverRulesConditionsResourceTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.putResourceTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a>

---

##### `resetCidr` <a name="resetCidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetIpamPoolId` <a name="resetIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetIpamPoolId"></a>

```typescript
public resetIpamPoolId(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetResourceOwner` <a name="resetResourceOwner" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceOwner"></a>

```typescript
public resetResourceOwner(): void
```

##### `resetResourceRegion` <a name="resetResourceRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceRegion"></a>

```typescript
public resetResourceRegion(): void
```

##### `resetResourceTag` <a name="resetResourceTag" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.resetResourceTag"></a>

```typescript
public resetResourceTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwnerInput">resourceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegionInput">resourceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTagInput">resourceTagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceOwnerInput`<sup>Optional</sup> <a name="resourceOwnerInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwnerInput"></a>

```typescript
public readonly resourceOwnerInput: string;
```

- *Type:* string

---

##### `resourceRegionInput`<sup>Optional</sup> <a name="resourceRegionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegionInput"></a>

```typescript
public readonly resourceRegionInput: string;
```

- *Type:* string

---

##### `resourceTagInput`<sup>Optional</sup> <a name="resourceTagInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTagInput"></a>

```typescript
public readonly resourceTagInput: IResolvable | Ec2IpamPrefixListResolverRulesConditionsResourceTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a>

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverRulesConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>

---


### Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference <a name="Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverRulesConditionsResourceTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsResourceTag">Ec2IpamPrefixListResolverRulesConditionsResourceTag</a>

---


### Ec2IpamPrefixListResolverRulesList <a name="Ec2IpamPrefixListResolverRulesList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.get"></a>

```typescript
public get(index: number): Ec2IpamPrefixListResolverRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>[]

---


### Ec2IpamPrefixListResolverRulesOutputReference <a name="Ec2IpamPrefixListResolverRulesOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetIpamScopeId">resetIpamScopeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetStaticCidr">resetStaticCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | Ec2IpamPrefixListResolverRulesConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetIpamScopeId` <a name="resetIpamScopeId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetIpamScopeId"></a>

```typescript
public resetIpamScopeId(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetRuleType"></a>

```typescript
public resetRuleType(): void
```

##### `resetStaticCidr` <a name="resetStaticCidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.resetStaticCidr"></a>

```typescript
public resetStaticCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList">Ec2IpamPrefixListResolverRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ruleTypeInput">ruleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.staticCidrInput">staticCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.staticCidr">staticCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: Ec2IpamPrefixListResolverRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditionsList">Ec2IpamPrefixListResolverRulesConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | Ec2IpamPrefixListResolverRulesConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesConditions">Ec2IpamPrefixListResolverRulesConditions</a>[]

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ipamScopeIdInput"></a>

```typescript
public readonly ipamScopeIdInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ruleTypeInput"></a>

```typescript
public readonly ruleTypeInput: string;
```

- *Type:* string

---

##### `staticCidrInput`<sup>Optional</sup> <a name="staticCidrInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.staticCidrInput"></a>

```typescript
public readonly staticCidrInput: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `staticCidr`<sup>Required</sup> <a name="staticCidr" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.staticCidr"></a>

```typescript
public readonly staticCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverRules">Ec2IpamPrefixListResolverRules</a>

---


### Ec2IpamPrefixListResolverTagsList <a name="Ec2IpamPrefixListResolverTagsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.get"></a>

```typescript
public get(index: number): Ec2IpamPrefixListResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>[]

---


### Ec2IpamPrefixListResolverTagsOutputReference <a name="Ec2IpamPrefixListResolverTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer"></a>

```typescript
import { ec2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2IpamPrefixListResolverTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolver.Ec2IpamPrefixListResolverTags">Ec2IpamPrefixListResolverTags</a>

---



