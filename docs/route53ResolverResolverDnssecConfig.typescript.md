# `route53ResolverResolverDnssecConfig` Submodule <a name="`route53ResolverResolverDnssecConfig` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverDnssecConfig <a name="Route53ResolverResolverDnssecConfig" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_dnssec_config awscc_route53resolver_resolver_dnssec_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

new route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig(scope: Construct, id: string, config?: Route53ResolverResolverDnssecConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig">Route53ResolverResolverDnssecConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig">Route53ResolverResolverDnssecConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.resetResourceId">resetResourceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverDnssecConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isConstruct"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformElement"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformResource"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ResolverResolverDnssecConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ResolverResolverDnssecConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ResolverResolverDnssecConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_dnssec_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverDnssecConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resolverDnssecConfigId">resolverDnssecConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.validationStatus">validationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `resolverDnssecConfigId`<sup>Required</sup> <a name="resolverDnssecConfigId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resolverDnssecConfigId"></a>

```typescript
public readonly resolverDnssecConfigId: string;
```

- *Type:* string

---

##### `validationStatus`<sup>Required</sup> <a name="validationStatus" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.validationStatus"></a>

```typescript
public readonly validationStatus: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverDnssecConfigConfig <a name="Route53ResolverResolverDnssecConfigConfig" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.Initializer"></a>

```typescript
import { route53ResolverResolverDnssecConfig } from '@cdktn/provider-awscc'

const route53ResolverResolverDnssecConfigConfig: route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.resourceId">resourceId</a></code> | <code>string</code> | ResourceId. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.route53ResolverResolverDnssecConfig.Route53ResolverResolverDnssecConfigConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_dnssec_config#resource_id Route53ResolverResolverDnssecConfig#resource_id}

---



