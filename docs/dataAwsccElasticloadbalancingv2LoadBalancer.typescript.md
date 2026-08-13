# `dataAwsccElasticloadbalancingv2LoadBalancer` Submodule <a name="`dataAwsccElasticloadbalancingv2LoadBalancer` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2LoadBalancer <a name="DataAwsccElasticloadbalancingv2LoadBalancer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_load_balancer awscc_elasticloadbalancingv2_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer(scope: Construct, id: string, config: DataAwsccElasticloadbalancingv2LoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig">DataAwsccElasticloadbalancingv2LoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig">DataAwsccElasticloadbalancingv2LoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isConstruct"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformElement"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2LoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2LoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticloadbalancingv2LoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2LoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId">canonicalHostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize">enableCapacityReservationProvisionStabilize</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat">enablePrefixForIpv6SourceNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes">loadBalancerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerFullName">loadBalancerFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity">minimumLoadBalancerCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.subnetMappings">subnetMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList">DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList">DataAwsccElasticloadbalancingv2LoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `canonicalHostedZoneId`<sup>Required</sup> <a name="canonicalHostedZoneId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.canonicalHostedZoneId"></a>

```typescript
public readonly canonicalHostedZoneId: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `enableCapacityReservationProvisionStabilize`<sup>Required</sup> <a name="enableCapacityReservationProvisionStabilize" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enableCapacityReservationProvisionStabilize"></a>

```typescript
public readonly enableCapacityReservationProvisionStabilize: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enablePrefixForIpv6SourceNat`<sup>Required</sup> <a name="enablePrefixForIpv6SourceNat" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enablePrefixForIpv6SourceNat"></a>

```typescript
public readonly enablePrefixForIpv6SourceNat: string;
```

- *Type:* string

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Required</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```typescript
public readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `loadBalancerAttributes`<sup>Required</sup> <a name="loadBalancerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerAttributes"></a>

```typescript
public readonly loadBalancerAttributes: DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList">DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList</a>

---

##### `loadBalancerFullName`<sup>Required</sup> <a name="loadBalancerFullName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerFullName"></a>

```typescript
public readonly loadBalancerFullName: string;
```

- *Type:* string

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `minimumLoadBalancerCapacity`<sup>Required</sup> <a name="minimumLoadBalancerCapacity" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.minimumLoadBalancerCapacity"></a>

```typescript
public readonly minimumLoadBalancerCapacity: DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference">DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetMappings`<sup>Required</sup> <a name="subnetMappings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.subnetMappings"></a>

```typescript
public readonly subnetMappings: DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList">DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.tags"></a>

```typescript
public readonly tags: DataAwsccElasticloadbalancingv2LoadBalancerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList">DataAwsccElasticloadbalancingv2LoadBalancerTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2LoadBalancerConfig <a name="DataAwsccElasticloadbalancingv2LoadBalancerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2LoadBalancerConfig: dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticloadbalancingv2_load_balancer#id DataAwsccElasticloadbalancingv2LoadBalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes <a name="DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes: dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes = { ... }
```


### DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity <a name="DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity: dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity = { ... }
```


### DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings <a name="DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings: dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings = { ... }
```


### DataAwsccElasticloadbalancingv2LoadBalancerTags <a name="DataAwsccElasticloadbalancingv2LoadBalancerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTags.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingv2LoadBalancerTags: dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList <a name="DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes">DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes">DataAwsccElasticloadbalancingv2LoadBalancerLoadBalancerAttributes</a>

---


### DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference <a name="DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">capacityUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityUnits`<sup>Required</sup> <a name="capacityUnits" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```typescript
public readonly capacityUnits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity">DataAwsccElasticloadbalancingv2LoadBalancerMinimumLoadBalancerCapacity</a>

---


### DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList <a name="DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference <a name="DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId">allocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address">iPv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address">privateIPv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix">sourceNatIpv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings">DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

---

##### `iPv6Address`<sup>Required</sup> <a name="iPv6Address" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.iPv6Address"></a>

```typescript
public readonly iPv6Address: string;
```

- *Type:* string

---

##### `privateIPv4Address`<sup>Required</sup> <a name="privateIPv4Address" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.privateIPv4Address"></a>

```typescript
public readonly privateIPv4Address: string;
```

- *Type:* string

---

##### `sourceNatIpv6Prefix`<sup>Required</sup> <a name="sourceNatIpv6Prefix" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.sourceNatIpv6Prefix"></a>

```typescript
public readonly sourceNatIpv6Prefix: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings">DataAwsccElasticloadbalancingv2LoadBalancerSubnetMappings</a>

---


### DataAwsccElasticloadbalancingv2LoadBalancerTagsList <a name="DataAwsccElasticloadbalancingv2LoadBalancerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference <a name="DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingv2LoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTags">DataAwsccElasticloadbalancingv2LoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingv2LoadBalancerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2LoadBalancer.DataAwsccElasticloadbalancingv2LoadBalancerTags">DataAwsccElasticloadbalancingv2LoadBalancerTags</a>

---



